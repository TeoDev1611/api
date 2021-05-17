import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import logger from "./middlewares/logger.ts";
import router from "./routes/baseroute.ts"

const configEnv = config({ safe: true, path: "../.env" });
const app: Application = new Application();
// const router: Router = new Router();
const port = 8080;

app.use(logger.logger);
app.use(router.moldyRouter.allowedMethods());
app.use(router.moldyRouter.routes());

if (configEnv["DEPLOY"] == "ON") {
  console.log("SERVER DEPLOYING");
  addEventListener("fetch", app.fetchEventHandler());
} else if (configEnv["DEPLOY"] == "OFF") {
  console.log(`RUNNING ON PORT ${port}`);
  await app.listen({ port });
} else {
  console.log("ERROR: DEPLOY NOT OPTION FOUND");
}
