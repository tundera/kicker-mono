import { Command, flags } from '@oclif/command'
import { spawn } from 'cross-spawn'
import { join } from 'path'

import { getWorkspaceDir } from '../utils/workspaces'

export class Build extends Command {
  static description = 'Creates a production build'
  static aliases = ['b']

  static args = [
    {
      name: 'workspace',
      required: false,
      description: 'target workspace to build',
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async buildAllWorkspaces() {
    await spawn('yarn', ['build'], {
      cwd: process.cwd(),
    }).stdout.pipe(process.stdout)
  }

  async buildWorkspace(name: string) {
    const workspaceDir = await getWorkspaceDir(name)

    return spawn('yarn', ['build'], {
      cwd: join(process.cwd(), workspaceDir),
    }).stdout.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Build)

    try {
      if (args.workspace) {
        await this.buildWorkspace(args.workspace)
      } else {
        await this.buildAllWorkspaces()
      }
    } catch (err) {
      console.error(err)
      process.exit(1) // clean up?
    }
  }
}
