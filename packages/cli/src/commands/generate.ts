import { Command, flags } from '@oclif/command'
import execa from 'execa'
import { join } from 'path'
import { generateFromTemplate } from '../utils/generator'

export class Generate extends Command {
  static description = 'Generate code from template'
  static aliases = ['g']

  static args = [
    {
      name: 'resource',
      required: true,
      description: 'resource type to generate',
      options: ['component', 'page', 'api'],
    },
  ]

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async generateFromTemplate(resource: string) {
    return execa('yarn', ['hygen', resource, 'new'], {
      cwd: join(process.cwd(), 'app'),
      env: {
        FORCE_COLOR: 'true',
      },
      stdio: 'inherit',
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args, flags } = this.parse(Generate)

    try {
      const child = await this.generateFromTemplate(args.resource)

      child?.on('close', (code: number) => {
        const message = code
          ? 'Failed to run generate script! ❌'
          : 'Done running generate script! ✅'
        console.log(message)
        return process.exit(code)
      })

      child?.on('SIGINT', (code: number) => {
        console.log('Interrupted generate script!')
        return process.exit(code)
      })
      child?.on('SIGTERM', (code: number) => {
        console.log('Terminated generate script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1) // clean up?
    }
  }
}
