import { Agent } from "@mastra/core/agent";
import { okrMcpClient } from "../mcp/okr-mcp-client";
import { Memory } from "@mastra/memory";

export const okrAgent = new Agent({
    id: "okr-agent",
    name: "Okr Agent",
    description: "A helpfool okr agent",
    instructions: `You are the Tenda OKR Assistant. 
        Use the provided context (like objectiveId) to answer questions about "this" objective or cycle. 
        Always use tools to fetch real-time data before answering. 
        Be concise and professional. Also always format your answers where possible to an ouput that can be rendered in a markdown component`,
    model: 'google/gemini-2.5-pro',
    tools: await okrMcpClient.listTools(),
    memory: new Memory(),
})