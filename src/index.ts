import type { Plugin } from "@elizaos/core";
import { getOnChainActions } from "./actions";
import { getWalletProvider } from "./wallet";

const goatPlugin: Plugin = {
    name: "[GOAT] Onchain Actions",
    description: "Mode integration plugin",
    providers: [getWalletProvider()],
    evaluators: [],
    services: [],
    actions: getOnChainActions(),
};
export default goatPlugin