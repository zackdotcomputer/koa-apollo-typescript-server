import * as Koa from "koa";
import "reflect-metadata";
import logger from "./logger";

import router from "./router";

logger.info(`Starting GraphQL Server...`);

const app = new Koa();
const port = process.env.PORT || 4000;

router.applyMiddleware({ app, cors: {}, bodyParserConfig: {} });

app.listen(port, () => {
  logger.info(`🚀 Server listening on the port ${port}`);
});
