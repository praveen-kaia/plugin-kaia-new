import { IAgentRuntime, Plugin } from '@elizaos/core';

declare function createGoatPlugin(runtime: IAgentRuntime): Promise<Plugin>;

export { createGoatPlugin as default };
