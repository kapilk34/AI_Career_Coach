import { serve } from "inngest/next";  // ✅ correct
import { inngest } from "@/lib/inngest/client";

// create API
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [],
});