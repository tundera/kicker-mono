import { makeSchema } from 'nexus'
import { join } from 'path'
import * as inputTypes from './inputs'
import * as moduleTypes from './modules'
import * as scalarTypes from './scalars'

const cwd = process.cwd()

export const schema = makeSchema({
  types: [moduleTypes, scalarTypes, inputTypes],
  plugins: [],
  outputs: {
    schema: join(cwd, 'schema.graphql'),
    typegen: join(cwd, 'src/generated', 'nexus.ts'),
  },
  contextType: {
    module: require.resolve(join(cwd, 'src', 'types.ts')),
    export: 'Context',
    alias: 'ctx',
  },
  sourceTypes: {
    modules: [
      {
        module: join(cwd, 'db', 'index.ts'),
        alias: 'db',
      },
    ],
  },
  prettierConfig: require.resolve('../../../prettier.config'),
})
