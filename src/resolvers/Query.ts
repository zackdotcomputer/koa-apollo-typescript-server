import { QueryResolvers } from "../../generated/graphql";

const QueryResolver: QueryResolvers = {
  hello: () => {
    return {
      message: "Hello world"
    };
  }
};

export default QueryResolver;
