import path from 'path'
import { readJSON } from 'fs-extra'
import { getPackages } from '@monorepo-utils/package-utils'

const root = process.cwd()

const getRootName = async () => {
  const manifest = await readJSON(path.resolve(root, 'package.json'))
  return manifest.name
}

export const getWorkspaceDir = async (workspace: string): Promise<string> => {
  const workspaces = await readJSON(path.resolve(root, 'workspace.json'))

  const rootName = await getRootName()
  const workspaceName = `@${rootName}/${workspace}`

  if (workspaces && Object.keys(workspaces.projects || {}).includes(workspaceName)) {
    return workspaces.projects[workspaceName].root
  }

  return root
}

export const getProjectWorkspaces = () => {
  return getPackages(root).filter(
    (workspace) => path.dirname(workspace.packageJSON.name) === '@kicker',
  )
}

export const getWorkspaceNames = () => {
  const workspaces = getProjectWorkspaces()
  return workspaces.map(({ packageJSON }) => packageJSON.name.split(path.sep).pop())
}
