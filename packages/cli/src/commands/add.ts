import { flags } from '@oclif/command'
import execa from 'execa'
import { Command } from '../command'

export class Add extends Command {
  static strict = false
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
    let args = ['workspace', `@kicker/${workspace}`, 'add', module]

    args = args.concat(options)

    await execa('yarn', args, {
      cwd: this.project.root,
      env: {
        FORCE_COLOR: 'true',
      },
      stdio: 'inherit',
    })

    await execa('yarn', {
      cwd: this.project.root,
      env: {
        FORCE_COLOR: 'true',
      },
      stdio: 'inherit',
    })
  }

  async run() {
    const { args, flags } = this.parse(Add)

    const options = []

    if (flags.dev) options.push('--dev')
    if (flags.exact) options.push('--exact')
    if (flags.peer) options.push('--peer')

    try {
      await this.addModule(args.module, args.workspace, options)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
