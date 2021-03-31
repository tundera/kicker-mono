const findWorkspaceRoot = require('find-yarn-workspace-root')

const workspaceRoot = findWorkspaceRoot(process.cwd()) || process.cwd()

module.exports = {
  presets: ['next/babel'],
  plugins: ['superjson-next'],
}
