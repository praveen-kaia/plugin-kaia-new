import type { Plugin } from "@elizaos/core";
import { getOnChainActions } from "./actions";
import { getWalletClient, getWalletProvider } from "./wallet";

async function createGoatPlugin(
    env: any
): Promise<Plugin> {
    const walletClient = getWalletClient(env);
    const actions = await getOnChainActions(walletClient);

    return {
        name: "[GOAT] Onchain Actions",
        description: "Mode integration plugin",
        providers: [getWalletProvider(walletClient)],
        evaluators: [],
        services: [],
        actions: actions,
    };
}

export default createGoatPlugin;
