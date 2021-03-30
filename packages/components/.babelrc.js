import findWorkspaceRoot from 'find-yarn-workspace-root'

export const workspaceRoot = findWorkspaceRoot(process.cwd()) ?? process.cwd()

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: workspaceRoot,
        alias: {
          // resolve modules here
          test: './packages/components/test',
        },
      },
    ],
  ],
}
