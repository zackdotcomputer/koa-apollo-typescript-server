import { QueryResolvers } from "../generated/graphql";

export const QueryResolver: QueryResolvers = {
  hello: () => {
    return {
      message: "Hello world"
    };
  }
};
