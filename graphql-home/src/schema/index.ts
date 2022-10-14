import merge from 'lodash.merge'
import { GraphQLResolverMap } from "apollo-graphql";
import globalTypeDefs from './global/typeDefs'
import globalResolvers from './global/resolvers'

import userTypeDefs from './User/typeDefs'
import userResolvers from './User/resolvers'

export const typeDefs = [
  globalTypeDefs,
  userTypeDefs
]

export const resolvers = merge(
  globalResolvers,
  userResolvers
) as GraphQLResolverMap;
