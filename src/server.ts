import * as Koa from "koa";
import * as helmet from "koa-helmet";
import "reflect-metadata";
import logger from "./logger";

import router from "./router";

logger.info(`Starting GraphQL Server...`);

const app = new Koa();
const port = process.env.PORT || 4000;

app.use(helmet());

router.applyMiddleware({ app, cors: {}, bodyParserConfig: {} });

app.listen(port, () => {
  logger.info(`🚀 Server listening on the port ${port}`);
});
