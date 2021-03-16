const cwd = process.cwd();

module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
    [
      "module-resolver",
      {
        root: cwd,
        alias: {
          // module aliases for test files
        },
      },
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
  ];

  const babelrcRoots = [
    "packages/*",
    "apps/*",
    "sites/*",
    "services/*",
    "studio",
    "cli",
    "docs",
    "scripts",
  ];

  return {
    presets,
    plugins,
    babelrcRoots,
  };
};
