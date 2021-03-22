import { Command, flags } from '@oclif/command'
import execa from 'execa'

export class Jest extends Command {
  static description = 'Start the production server'

  static aliases = ['j']

  static args = []

  static flags = {
    help: flags.help({ char: 'h' }),
    watch: flags.boolean({
      description: 'Enable watch mode for tests',
    }),
  }

  async runJestTests(watch: boolean) {
    const opts = ['--passWithNoTests']

    if (watch) {
      opts.push('--watch')
    }

    return execa('yarn', ['test', ...opts], {
      cwd: process.cwd(),
      stdio: 'inherit',
    })
      .stdout?.pipe(process.stdout)
      .on('close', (code: number) => process.exit(code))
  }

  async run() {
    const { flags } = this.parse(Jest)

    try {
      const child = await this.runJestTests(flags.watch)

      child?.on('close', (code: number) => {
        const message = code ? 'Failed to run develop script! ❌' : 'Done running develop script! ✅'
        console.log(message)
        return process.exit(code)
      })

      child?.on('SIGINT', (code: number) => {
        console.log('Interrupted develop script!')
        return process.exit(code)
      })
      child?.on('SIGTERM', (code: number) => {
        console.log('Terminated develop script!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
