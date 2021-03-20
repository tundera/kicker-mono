import { Command, flags } from '@oclif/command'
import { spawn } from 'cross-spawn'
import { join } from 'path'
export class Start extends Command {
  static description = 'Start the production server'

  static aliases = ['s']

  static args = [
    { name: 'service', required: true, description: 'target service in the `services` directory', options: ['hoop'] },
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

  async startService(name: string) {
    return spawn('yarn', ['start'], {
      cwd: join(process.cwd(), 'services', name),
    })
  }

  async run() {
    const { args, flags } = this.parse(Start)

    try {
      const child = await this.startService(args.service)

      child.on('close', (code: number) => {
        const message = code ? 'Failed to run develop script! ❌' : 'Done running develop script! ✅'
        console.log(message)
        return process.exit(code)
      })

      child.on('SIGINT', (code: number) => {
        console.log('Interrupted develop script!')
        return process.exit(code)
      })
      child.on('SIGTERM', (code: number) => {
        console.log('Terminated develop script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
