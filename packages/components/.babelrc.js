const findWorkspaceRoot = require('find-yarn-workspace-root')

const workspaceRoot = findWorkspaceRoot(process.cwd()) || process.cwd()

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-env',
  ],
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
