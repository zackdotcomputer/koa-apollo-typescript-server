import * as Koa from "koa";
import * as helmet from "koa-helmet";
import "reflect-metadata";

import router from "./router";

const app = new Koa();
const port = process.env.PORT || 4000;

app.use(helmet());

router.applyMiddleware({ app, cors: {}, bodyParserConfig: {} });

app.listen(port, () => {
  console.log(`🚀 API listening on the port ${port}`);
});
