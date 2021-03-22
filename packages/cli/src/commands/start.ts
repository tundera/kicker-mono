import { Command, flags } from '@oclif/command'
import { spawn } from 'cross-spawn'
import { join } from 'path'
export class Start extends Command {
  static description = 'Start the production server'

  static aliases = ['s']

  static args = [
    {
      name: 'service',
      required: true,
      description: 'target service in the `services` directory',
      options: ['hoop'],
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

  async startServiceProd(name: string) {
    return spawn('yarn', ['lerna', 'run', 'start', '--scope', `@kicker/${name}`, '--stream']).stdout.pipe(
      process.stdout,
    )
  }

  async run() {
    const { args, flags } = this.parse(Start)

    try {
      const child = await this.startServiceProd(args.service)

      child.on('close', (code: number) => {
        const message = code ? 'Failed to run start script! ❌' : 'Done running start script! ✅'
        console.log(message)
        return process.exit(code)
      })

      child.on('SIGINT', (code: number) => {
        console.log('Interrupted start script!')
        return process.exit(code)
      })
      child.on('SIGTERM', (code: number) => {
        console.log('Terminated start script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
