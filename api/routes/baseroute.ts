import {Router} from "https://deno.land/x/oak/mod.ts";

const moldyRouter = new Router();

moldyRouter.get("/", (ctx) => {
    const responseVar = {
        msg: "API WORKING",
        status: "success",
        error: "nothing",
        documentation : "https://moldy-book.netlify.app/"
    }
    ctx.response.body = responseVar;
})

export default {moldyRouter};