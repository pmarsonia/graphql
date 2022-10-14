import {gql} from "apollo-server-express";

export default gql`
type Query {
  getUser(userId:ID!): User
}
type User
`;
