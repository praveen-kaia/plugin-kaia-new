declare const goatPlugin: {
    name: string;
    description: string;
    providers: {
        get(runtime: IAgentRuntime): Promise<string | null>;
    }[];
    evaluators: any[];
    services: any[];
    actions: {
        handler: (runtime: IAgentRuntime, message: Memory, state: State | undefined, options?: Record<string, unknown>, callback?: HandlerCallback) => Promise<boolean>;
        name: string;
        description: string;
        similes: any[];
        validate: () => Promise<boolean>;
        examples: any[];
    }[];
};

export { goatPlugin as default };
