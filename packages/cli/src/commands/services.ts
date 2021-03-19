import { Command, flags } from '@oclif/command'
import execa from 'execa'

export default class Services extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ kicker services
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name of service to invoke' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'service' }]

  async run() {
    const { args, flags } = this.parse(Services)

    const name = args.service ?? 'all'
    this.log(`Invoking ${name === 'all' ? 'all services' : `${name} service`} from ./src/commands/services.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
