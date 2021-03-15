const typescript = require('@wessberg/rollup-plugin-ts')

module.exports = {
  rollup(config, options) {
    config.plugins = config.plugins.map((plugin) =>
      plugin.name === 'rpt2' ? typescript({ tsconfig: 'tsconfig.json', transpiler: 'babel' }) : plugin,
    )

    return config
  },
}
