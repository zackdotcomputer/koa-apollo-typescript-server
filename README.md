# Basic GraphQL Server Proof-of-concept

This is my reference implementation of a GraphQL server in Node. It was built with several key goals in mind:

1. **Typescript and Koa based.** I wanted the server to be written in Typescript and based on the Koa server, which I think gives you room for a more performant server thanks to its first-class support for async resolvers and Promises.

2. **Using Apollo Server.** I am familiar with Apollo Server and would like to keep their caching and performance enhancements until I am sure I won't miss them.

3. **Schema-first development in SDL.** I think the GraphQL SDL is a great markup for GraphQL APIs. I have integrated with [GraphQL Code Generator](https://graphql-code-generator.com/) so that disparate SDL files in the `schema` directory will be automatically combined and converted into Typescript definitions and a usable typeDefs file in the `generated` directory.

4. **Linting and styling from ESLint and Prettier.** The server's code, in the `src` directory, is linted using the AirBNB and TSLint rules and it is styled using Prettier's rules. This combination allows you to get some really powerful code style checking and correction as you work if you use VSCode, just add the Prettier and ESLint extensions to your IDE.

5. **Close to Production Ready.** The server should be easy to use in development mode, thanks to hot-swapping triggered by both changes to the schema and the source files. However, when you're ready to ship it to production, you should be ready to go thanks to the integration of a log-to-file configuration of Winston and write-to-file code generation.

## How to Use

To base a server off this reference implementation, fork it and start building. This implementation is freely available under the Unlicense and I will keep it up to date as I change my tools and the tools themselves change.

## Built in commands

- `npm start` Run the server in static mode. This is intended for when you are running the server in production situations.

- `npm run codegen` Read in the `.gql` files in the `schema` directory and output updated type definitions to `generated`.

- `npm run dev` Start codegen and server in "watch" mode, where they will automatically trigger a rebuild and restart when their source files change.

- `npm run lint` Check the files in the `src` directory for compliance to the ESLint and Prettier configurations.

## Future Goals

I put this together in an afternoon, so there are definitely goals left to strive for here.

- [ ] Packing the server to smaller Javascript files? I'm not sure what the production-readiness of `ts-node` is, so it's possible that I should create a `build` command that uses `tsc` to convert the Typescript files to plain Javascript.

- [ ] Dockerizing the output?
