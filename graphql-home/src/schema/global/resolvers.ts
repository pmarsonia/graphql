import {Resolvers} from "../../__generated__/graphql";
import {Context} from "../../types";

export default {
  Query: {
    getUser: (_, { userId }) => userId,
  },
} as Resolvers<Context>
