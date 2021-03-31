import { flags } from '@oclif/command'
import c from 'chalk'
import execa from 'execa'
import { join } from 'path'
import { Command } from '../command'
import { workspaceRoot } from '../utils/workspaces'

export class Run extends Command {
  static description = 'Run script in `scripts` directory using ts-node'

  static aliases = ['r']

  static args = [
    {
      name: 'name',
      required: true,
      description: 'Filename of script to run',
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

  runScript(name: string) {
    console.log(`Running script at "scripts/src/${name}"`)
    return execa('node', ['--loader', 'ts-node/esm', `src/${name}.ts`], {
      cwd: join(workspaceRoot, 'scripts'),
      env: {
        FORCE_COLOR: 'true',
      },
    }).stdout?.pipe(process.stdout)
  }

  async run() {
    const { args } = this.parse(Run)

    try {
      const child = await this.runScript(args.name)

      child?.on('close', (code: number) => {
        const message = code
          ? `Failed to run script ${c.blueBright`${args.name}`} ❌`
          : `Done running script ${c.blueBright`${args.name}`} ✅`
        console.log(message)
        return process.exit(code)
      })

      child?.on('SIGINT', (code: number) => {
        console.log('Interrupted run command!')
        return process.exit(code)
      })
      child?.on('SIGTERM', (code: number) => {
        console.log('Terminated run command!')
        return process.exit(code)
      })
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
}
