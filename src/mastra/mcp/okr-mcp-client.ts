import { MCPClient } from '@mastra/mcp'

export const okrMcpClient = new MCPClient({
  id: 'okr-mcp-client',
  servers: {
    // wikipedia: {
    //   command: 'npx',
    //   args: ['-y', 'wikipedia-mcp'],
    // },
    okr: {
      url: new URL(`http://localhost:3500/mcp`),
      requestInit: {
        headers: {
          'Cookie': 'tenda.session_token=JabzpK9yPbrGkgnZUEmAsrW6LnYcfR2j.qCJnIBMDRTFLQzQA2X2ZTmrgmIXhqRBs5DxJUjowSWo%3D; other_cookie=value',
          'Content-Type': 'application/json',
        },
      },
    },
  },
})