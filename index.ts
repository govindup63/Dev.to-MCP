import { postArticle } from "./routes/articles";
import {
  McpServer,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import dotenv from "dotenv"
dotenv.config();

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

server.tool(
  "publish-devto-article",
  {
    title: z.string().min(5).max(150),
    content: z.string().min(100),
    description: z.string().max(150).optional(),
    tags: z.array(z.string().max(25)).max(4),
  },
  async ({ title, content, description, tags }) => {
    try {
      const result = await postArticle(title, content, description || "", tags);
      return {
        content: [
          {
            type: "text",
            text: `Published "${title}" with ID }`,
          },
        ],
      };
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: error instanceof Error ? error.message : String(error),
          },
        ],
      };
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
