import { GraphQLDateTime } from 'graphql-iso-date'
import { GraphQLUpload } from 'graphql-upload'
import { asNexusMethod } from 'nexus'

export const Upload = asNexusMethod(GraphQLUpload, 'upload')
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')
