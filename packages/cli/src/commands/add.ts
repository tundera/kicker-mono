import { Command, flags } from '@oclif/command'
import { spawn } from 'cross-spawn'

export class Add extends Command {
  static description = 'Add dependency to project'

  static aliases = ['a']

  static args = [
    {
      name: 'workspace',
      required: true,
      description: 'target workspace to install module',
    },
    {
      name: 'module',
      required: true,
      description: 'module name',
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    dev: flags.boolean({
      char: 'D',
      description: 'Install module as dev dependency',
    }),
    exact: flags.boolean({
      char: 'E',
      description: 'Install module with exact version',
    }),
    peer: flags.boolean({
      char: 'P',
      description: 'Install module as peer dependency',
    }),
  }

  async addModule(module: string, workspace: string, options: string[]) {
    return spawn('yarn', ['lerna', 'add', module, '--scope', `@kicker/${workspace}`].concat(options)).stdout.pipe(
      process.stdout,
    )
  }

  async run() {
    const { args, flags } = this.parse(Add)

    const options = []

    if (flags.dev) options.push('--dev')
    if (flags.exact) options.push('--exact')
    if (flags.peer) options.push('--peer')

    try {
      const child = await this.addModule(args.module, args.workspace, options)

      child.on('close', (code: number) => {
        const message = code
          ? `Failed to add module ${args.module}! ❌`
          : `Added module ${args.module} to workspace ${args.workspace}! ✅`
        console.log(message)
        return process.exit(code)
      })

      child.on('SIGINT', (code: number) => {
        console.log('Interrupted add script!')
        return process.exit(code)
      })
      child.on('SIGTERM', (code: number) => {
        console.log('Terminated add script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
