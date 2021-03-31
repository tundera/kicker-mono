const inflection = require('inflection')
const path = require('path')
const findWorkspaceRoot = require('find-yarn-workspace-root')

const workspaceRoot = () => findWorkspaceRoot(process.cwd()) ?? process.cwd()
const camelizePath = (name, lower = true) => inflection.camelize(name, lower).replace(/::/g, '/')
const pluralizeProp = (name) => inflection.pluralize(name)

const camelizeQuery = (name, lower = false) => inflection.camelize(name, lower).replace(/::/g, '/')
const pluralizeQuery = (name) => inflection.pluralize(name)

// Specify paths for projects
const componentsPath = path.join(workspaceRoot, 'packages', 'components')
const modelsPath = path.join(workspaceRoot, 'services', 'hoop')
const pagesPath = path.join(workspaceRoot, 'app/pages')
const apiPath = path.join(pagesPath, 'api')

module.exports = {
  templates: `${__dirname}/templates`,
  helpers: {
    camelizedPathName: (name, lower = true) => camelizePath(name, lower),
    camelizedBaseName: (name, lower = false) => path.parse(camelizePath(name, lower)).base,
    baseName: (name) => path.parse(name).base,
    dirName: (name) => path.parse(name).dir,
    pluralizePageProp: (name) => pluralizeProp(name),
    camelizedQueryHook: (name, plural) => {
      const query = plural ? pluralizeQuery(name) : name
      const camelizedQuery = camelizeQuery(query)

      return `use${camelized}Query`
    },
    workspaceRoot,
    prependPagesPath: (path) => path.join(pagesPath, path),
    prependApiPath: (path) => path.join(apiPath, path),
    prependComponentsPath: (path) => path.join(componentsPath, path),
    prependModelsPath: (path) => path.join(modelsPath, path),
  },
}
