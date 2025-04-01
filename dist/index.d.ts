import { Plugin } from '@elizaos/core';

declare function createKaiaPlugin(getSetting: (key: string) => string | undefined): Promise<Plugin>;

export { createKaiaPlugin as default };
