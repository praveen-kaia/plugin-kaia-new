import type { Plugin } from "@elizaos/core";
import { getOnChainActions } from "./actions";
import { getWalletClient, getWalletProvider } from "./wallet";

async function createKaiaPlugin(
    config: any
): Promise<Plugin> {
    const walletClient = getWalletClient(config);
    const actions = await getOnChainActions(walletClient, config);

    return {
        name: "[GOAT] Onchain Actions",
        description: "Mode integration plugin",
        providers: [getWalletProvider(walletClient)],
        evaluators: [],
        services: [],
        actions: actions,
    };
}

export default createKaiaPlugin;
