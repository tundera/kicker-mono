import execa from 'execa'

import { workspaceRoot } from './workspaces'

export const startWorkspaces = async (workspaces: string[], development = false) => {
  let args = ['wsrun']

  workspaces.forEach((workspace) => {
    args = args.concat(['-p', `@kicker/${workspace}`])
  })

  args = args.concat(['-c', development ? 'dev' : 'start'])

  return execa('yarn', args, {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: 'inherit',
  })
    .on('close', (code: number) => {
      const message = code ? 'Failed to run start script! ❌' : 'Done running start script! ✅'
      console.log(message)
      return process.exit(code)
    })

    .on('SIGINT', (code: number) => {
      console.log('Interrupted start script!')
      return process.exit(code)
    })
    .on('SIGTERM', (code: number) => {
      console.log('Terminated start script!')
      return process.exit(code)
    })
}
