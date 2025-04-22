# MCP DEV.to Publisher

A powerful tool that enables AI assistants to publish articles directly to DEV.to using the Model Context Protocol (MCP).

## Description

This project implements a Model Context Protocol (MCP) server that allows AI assistants to write and publish articles directly to DEV.to. It provides a seamless integration between AI writing capabilities and the DEV.to platform, eliminating the need for manual copy-pasting or human intervention in the publishing process.

## Features

- Direct publishing to DEV.to from AI assistants
- Built-in validation for article requirements
- Error handling and reporting
- Simple and extensible architecture
- TypeScript implementation for type safety

## Installation

To install dependencies:

```bash
bun install
```

## Usage

To run the MCP server:

```bash
bun run index.ts
```

## Configuration

Create a `.env` file in the root directory with your DEV.to API key:

```
DEV_TO_API_KEY=your_api_key_here
```

## How It Works

1. The MCP server defines a tool called `publish-devto-article`
2. AI assistants can use this tool to publish articles with title, content, description, and tags
3. The server validates the input and sends it to the DEV.to API
4. The article is published directly to your DEV.to account

## Example

```typescript
// Example of how an AI assistant would use this tool
mcp_dev_to_publish_devto_article({
  title: "My Article Title",
  content: "# My Article\n\nThis is the content...",
  description: "A brief description of the article",
  tags: ["javascript", "tutorial"]
})
```

## Requirements

- [Bun](https://bun.sh) v1.2.5 or higher
- DEV.to API key
- Node.js environment

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
