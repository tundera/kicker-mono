import { server, ServerConfig } from '@tunderadev/hoop'
import { Command, flags } from '@oclif/command'

export class Start extends Command {
  static description = 'Start the production server'

  static aliases = ['s']

  static flags = {
    help: flags.help({ char: 'h' }),
    port: flags.integer({
      char: 'p',
      description: 'Set port number',
    }),
    hostname: flags.string({
      char: 'H',
      description: 'Set server hostname',
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

  async start(config: ServerConfig) {
    server.listen(config).then(({ url }) => {
      this.logStatus(url)
    })
  }

  async run() {
    const { flags } = this.parse(Start)

    const config = {
      port: flags.port ?? 4000,
    }

    try {
      await this.start(config)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
