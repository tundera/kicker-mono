import { flags } from '@oclif/command'
import c from 'chalk'
import ora from 'ora'
import { Command } from '../command'
import {
  buildPackages,
  buildWorkspaces,
  getWorkspaceNames,
  startWorkspaces,
} from '../utils/workspaces'

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
    const { argv } = this.parse(Start)

    try {
      const spinner = ora({
        text: c.blue`Building packages`,
      }).start()

      await buildPackages()

      spinner
        .stopAndPersist({
          symbol: '✅',
        })
        .start(c.blue`Building workspaces`)

      await buildWorkspaces(argv)

      spinner.stopAndPersist({
        symbol: '✅',
      })

      await startWorkspaces(argv, false)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
