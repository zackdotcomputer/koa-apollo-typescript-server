import { ApolloServer } from "apollo-server-koa";
import resolvers from "./resolvers";
import { typeDefs } from "../generated/schemaTypedef";

const router = new ApolloServer({
  resolvers,
  typeDefs
});

export default router;
