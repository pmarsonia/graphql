import {Context} from '../../types'
import { Resolvers } from "../../__generated__/graphql";

export default {
  User : {
    userId: (userId, _, ctx) => {
      console.log(ctx.req);
      return userId
    },
    userName: (userId, _, ctx) => {
      console.log(ctx.req);
      return `${userId}`
    }
  }
} as Resolvers<Context>
