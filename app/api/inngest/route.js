import { server } from "inngest/next";
import { inngest } from "@/lib/inngest/client";

//create an API that serves zero functions
export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        /*your function will be passed here later! */
    ],
});