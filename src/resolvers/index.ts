import { Resolvers } from "../../generated/graphql";
import QueryResolver from "./Query";

// Combine all the resolvers into one object
const allResolvers: Resolvers = { Query: QueryResolver };

export default allResolvers;
