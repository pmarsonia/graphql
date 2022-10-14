import {gql} from "apollo-server-express";

export default gql`
extend type User {
  userId: ID!
  userName: String
}
`
