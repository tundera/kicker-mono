import { makeSchema } from 'nexus'
import { join } from 'path'
import prettierConfig from '../../../../prettier.config'
import * as inputTypes from './inputs'
import * as moduleTypes from './modules'
import * as scalarTypes from './scalars'

const cwd = process.cwd()

export const schema = makeSchema({
  types: [moduleTypes, scalarTypes, inputTypes],
  plugins: [],
  outputs: {
    typegen: join(cwd, 'src/lib/graphql/generated/index.d.ts'),
    schema: join(cwd, 'src/lib/graphql/generated/schema.graphql'),
  },
  contextType: {
    module: join(cwd, 'src/lib/graphql', 'types.ts'),
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
  prettierConfig,
})
