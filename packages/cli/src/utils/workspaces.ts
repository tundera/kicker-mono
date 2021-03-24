import path from 'path'
import { readJSON } from 'fs-extra'
import { getPackages } from '@monorepo-utils/package-utils'
import findWorkspaceRoot from 'find-yarn-workspace-root'

export const workspaceRoot = findWorkspaceRoot(process.cwd()) ?? process.cwd()

const getRootName = async () => {
  const manifest = await readJSON(path.resolve(workspaceRoot, 'package.json'))
  return manifest.name
}

export const getWorkspaceDir = async (workspace: string): Promise<string> => {
  const workspaces = await readJSON(path.resolve(workspaceRoot, 'workspace.json'))

  const rootName = await getRootName()
  const workspaceName = `@${rootName}/${workspace}`

  if (workspaces && Object.keys(workspaces.projects || {}).includes(workspaceName)) {
    return workspaces.projects[workspaceName].root
  }

  return rootName
}

export const getProjectWorkspaces = () => {
  return getPackages(workspaceRoot).filter(
    (workspace) => path.dirname(workspace.packageJSON.name) === '@kicker',
  )
}

export const getProjectExamples = () => {
  return getPackages(workspaceRoot).filter(
    (workspace) => path.dirname(workspace.packageJSON.name) === '@examples',
  )
}

export const getWorkspaceNames = () => {
  const workspaces = getProjectWorkspaces()
  return workspaces.map(({ packageJSON }) => packageJSON.name.split(path.sep).pop())
}
