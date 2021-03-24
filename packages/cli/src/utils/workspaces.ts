import path from 'path'
import { readJSON } from 'fs-extra'
import { getPackages } from '@monorepo-utils/package-utils'
import findWorkspaceRoot from 'find-yarn-workspace-root'

export const workspaceRoot = findWorkspaceRoot(process.cwd()) ?? process.cwd()

export const getRootInfo = async () => {
  const manifest = await readJSON(path.resolve(workspaceRoot, 'package.json'))
  return {
    name: manifest.name,
    workspaces: [...manifest.workspaces.packages],
  }
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
