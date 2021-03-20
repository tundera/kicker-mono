import { readJSON } from 'fs-extra'
import { resolve } from 'path'

const rootDir = process.cwd()

const getRootName = async () => {
  const manifest = await readJSON(resolve(rootDir, 'package.json'))
  return manifest.name
}

export const getWorkspaceDir = async (workspace: string): Promise<string> => {
  const workspaces = await readJSON(resolve(rootDir, 'workspace.json'))

  const rootName = await getRootName()
  const workspaceName = `@${rootName}/${workspace}`

  if (workspaces && Object.keys(workspaces.projects || {}).includes(workspaceName)) {
    return workspaces.projects[workspaceName].root
  }

  return rootDir
}
