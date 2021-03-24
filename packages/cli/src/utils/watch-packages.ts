import execa from 'execa'

import { workspaceRoot } from '../utils/workspaces'

export const watchPackages = async () => {
  return execa('yarn', ['preconstruct', 'watch'], {
    cwd: workspaceRoot,
    env: {
      FORCE_COLOR: 'true',
    },
    stdio: 'inherit',
  })
}
