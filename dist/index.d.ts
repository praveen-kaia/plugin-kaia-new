import { Plugin } from '@elizaos/core';

declare function createKaiaPlugin(config: any): Promise<Plugin>;

export { createKaiaPlugin as default };
