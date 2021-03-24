import { Command, flags } from '@oclif/command'
import execa from 'execa'
import { getWorkspaceNames, workspaceRoot } from '../utils/workspaces'

export class Dev extends Command {
  static strict = false
  static description = 'Start the production server'

  static aliases = ['d']

  static args = [
    {
      name: 'workspace',
      required: true,
      description: 'target workspace in monorepo',
      options: getWorkspaceNames(),
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    port: flags.integer({
      char: 'p',
      description: 'Set port number',
    }),
    inspect: flags.boolean({
      description: 'Enable the Node.js inspector',
    }),
  }

  async logStatus(url: string) {
    console.log(`\
🚀 Server ready at: ${url}
⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
  `)
  }

  async startWorkspaceDev(workspaces: string[]) {
    let args = ['wsrun']

    workspaces.forEach((workspace) => {
      args = args.concat(['-p', `@kicker/${workspace}`])
    })

    args = args.concat(['-c', 'dev'])

    return execa('yarn', args, {
      cwd: workspaceRoot,
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { argv, flags } = this.parse(Dev)

    try {
      const subprocess = await this.startWorkspaceDev(argv)

      subprocess?.on('close', (code: number) => {
        const message = code
          ? 'Failed to run develop script! ❌'
          : 'Done running develop script! ✅'
        console.log(message)
        return process.exit(code)
      })

      subprocess?.on('SIGINT', (code: number) => {
        console.log('Interrupted develop script!')
        return process.exit(code)
      })
      subprocess?.on('SIGTERM', (code: number) => {
        console.log('Terminated develop script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
