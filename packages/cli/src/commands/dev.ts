import { flags } from '@oclif/command'
import execa from 'execa'
import ora from 'ora'
import Listr from 'listr'
import { watchPackages } from '../utils/packages'
import { Command } from '../command'
import { devPackages, getWorkspaceNames, workspaceRoot } from '../utils/workspaces'
import { buildPackages, startWorkspaces } from '../utils/workspaces'

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

  async run() {
    const { argv, flags } = this.parse(Dev)

    try {
      const spinner = ora().start('Preparing packages for development')

      await devPackages()

      spinner.stopAndPersist({
        symbol: '✅',
      })

      await Promise.all([watchPackages(), startWorkspaces(argv, true)])
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
