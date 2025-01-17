import { Plugin } from '@elizaos/core';

declare function createGoatPlugin(env: any): Promise<Plugin>;

export { createGoatPlugin as default };
