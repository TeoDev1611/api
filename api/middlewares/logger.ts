import { format } from "https://deno.land/std/datetime/mod.ts";

const logger = async (
  { response, request }: { response: any; request: any },
  next: Function
) => {
    await next()
    const start = Date.now()
    const end: number = Date.now()
    console.log(`
------------------------------------------------
METHOD: ${request.method}
URL : ${request.url}
IP: ${request.ip}
STATUS: ${response.status}
DATE: ${format(new Date(Date.now()), "MM-dd-yyyy hh:mm:ss.SSS")}
PI: ${start - end}
------------------------------------------------
    `)
};


export default {logger}