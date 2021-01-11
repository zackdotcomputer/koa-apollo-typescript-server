import { gql } from "apollo-server-koa";
export const typeDefs = gql`
schema {
  query: Query
}
type World {
  message: String!
}
type Query {
  hello: World
}
`