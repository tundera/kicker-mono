import { Command, flags } from '@oclif/command'
import { spawn } from 'cross-spawn'

export class Dev extends Command {
  static description = 'Start the production server'

  static aliases = ['a']

  static args = [
    {
      name: 'module',
      required: true,
      description: 'Module name',
    },
    {
      name: 'workspace',
      required: true,
      description: 'target workspace to install module',
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

  async addModule(module: string, workspace: string) {
    return spawn('yarn', ['lerna', 'add', module, '--scope', `@tunderadev/${workspace}`]).stdout.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Dev)

    try {
      const child = await this.addModule(args.module, args.workspace)

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
