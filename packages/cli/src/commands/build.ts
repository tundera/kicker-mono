import { Command, flags } from '@oclif/command'
import execa from 'execa'
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
    await execa('yarn', ['build'], {
      cwd: process.cwd(),
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  async buildWorkspace(name: string) {
    return execa('yarn', ['lerna', 'run', 'build', '--scope', `@kicker/${name}`, '--stream'], {
      cwd: process.cwd(),
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Build)

    try {
      if (args.workspace) {
        const child = await this.buildWorkspace(args.workspace)

        child?.on('close', (code: number) => {
          const message = code ? 'Failed to run build script! ❌' : 'Done running build script! ✅'
          console.log(message)
          return process.exit(code)
        })

        child?.on('SIGINT', (code: number) => {
          console.log('Interrupted build script!')
          return process.exit(code)
        })
        child?.on('SIGTERM', (code: number) => {
          console.log('Terminated build script!')
          return process.exit(code)
        })
      } else {
        await this.buildAllWorkspaces()
      }
    } catch (err) {
      console.error(err)
      process.exit(1) // clean up?
    }
  }
}
