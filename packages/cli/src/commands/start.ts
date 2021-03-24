import { flags } from '@oclif/command'
import execa from 'execa'
import { Command } from '../command'
import { getWorkspaceNames } from '../utils/workspaces'
import { startWorkspaces } from '../utils/start-workspaces'

export class Start extends Command {
  static strict = false
  static description = 'Start the production server'

  static aliases = ['s']

  static args = [
    {
      name: 'workspaces',
      required: true,
      description: 'target workspacs to start in monorepo',
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

  async run() {
    const { argv, flags } = this.parse(Start)

    try {
      await startWorkspaces(argv, false)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
