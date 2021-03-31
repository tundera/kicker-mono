import { flags } from '@oclif/command'
import execa from 'execa'
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
    {
      name: 'name',
      required: false,
      description: 'name of resource to generate',
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
    variant: flags.string({
      char: 'v',
      helpLabel: 'Resource variant',
      required: false,
    }),
  }

  generateFromTemplate(resource: string, name?: string, variant?: string) {
    const target = variant ? `${variant}:new` : 'new'
    const args = ['hygen', resource, target]

    if (name) {
      args.push('--name', name)
    }

    return execa('yarn', args, {
      cwd: workspaceRoot,
      env: {
        FORCE_COLOR: 'true',
      },
      stdio: 'inherit',
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Generate)

    try {
      const subprocess = await this.generateFromTemplate(args.resource, args.name, flags.variant)

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
