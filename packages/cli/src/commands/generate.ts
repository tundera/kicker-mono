import { flags } from '@oclif/command'
import execa from 'execa'
import { join } from 'path'
import { Command } from '../command'
import { workspaceRoot } from '../utils/workspaces'

export class Generate extends Command {
  static description = 'Generate code from template'
  static aliases = ['g']

  static args = [
    {
      name: 'resource',
      required: true,
      description: 'resource type to generate',
      options: ['component', 'page', 'api', 'model'],
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  getGeneratePath(resource: string) {
    switch (resource) {
      case 'component': {
        return join(workspaceRoot, 'packages/components')
      }
      case 'model': {
        return join(workspaceRoot, 'services/hoop')
      }
      case 'page': {
        return join(workspaceRoot, 'app')
      }
      case 'api': {
        return join(workspaceRoot, 'app')
      }
      default: {
        return join(workspaceRoot, 'app')
      }
    }
  }

  async generateFromTemplate(resource: string) {
    const writeTo = this.getGeneratePath(resource)
    return execa('yarn', ['hygen', resource, 'new'], {
      cwd: writeTo,
      env: {
        FORCE_COLOR: 'true',
      },
      stdio: 'inherit',
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Generate)

    try {
      const subprocess = await this.generateFromTemplate(args.resource)

      subprocess?.on('close', (code: number) => {
        const message = code
          ? 'Failed to run generate script! ❌'
          : 'Done running generate script! ✅'
        console.log(message)
        return process.exit(code)
      })

      subprocess?.on('SIGINT', (code: number) => {
        console.log('Interrupted generate script!')
        return process.exit(code)
      })
      subprocess?.on('SIGTERM', (code: number) => {
        console.log('Terminated generate script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1) // clean up?
    }
  }
}
