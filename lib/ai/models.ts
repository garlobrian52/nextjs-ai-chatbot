// Curated list of models available through Vercel AI Gateway.
// Keep model IDs valid in the Gateway catalog; use the task tier/capabilities
// below to make routing decisions without scattering model assumptions.
export const DEFAULT_CHAT_MODEL = "google/gemini-2.5-flash-lite";

export type ModelTier = "fast" | "balanced" | "reasoning";

export type ChatModel = {
  id: string;
  name: string;
  provider: string;
  description: string;
  tier: ModelTier;
  supportsTools: boolean;
  supportsReasoning: boolean;
};

export const chatModels: ChatModel[] = [
  // Anthropic
  {
    id: "anthropic/claude-haiku-4.5",
    name: "Claude Haiku 4.5",
    provider: "anthropic",
    description: "Fast and affordable for everyday chat and lightweight artifacts",
    tier: "fast",
    supportsTools: true,
    supportsReasoning: false,
  },
  {
    id: "anthropic/claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    provider: "anthropic",
    description: "Balanced choice for coding, writing, and multi-step tasks",
    tier: "balanced",
    supportsTools: true,
    supportsReasoning: false,
  },
  {
    id: "anthropic/claude-opus-4.5",
    name: "Claude Opus 4.5",
    provider: "anthropic",
    description: "Use for difficult reasoning, architecture, and high-stakes code tasks",
    tier: "reasoning",
    supportsTools: false,
    supportsReasoning: true,
  },

  // OpenAI
  {
    id: "openai/gpt-4.1-mini",
    name: "GPT-4.1 Mini",
    provider: "openai",
    description: "Fast and cost-effective for simple chat, rewriting, and extraction",
    tier: "fast",
    supportsTools: true,
    supportsReasoning: false,
  },
  {
    id: "openai/gpt-5.2",
    name: "GPT-5.2",
    provider: "openai",
    description: "Stronger reasoning for complex coding and multi-step problems",
    tier: "reasoning",
    supportsTools: false,
    supportsReasoning: true,
  },

  // Google
  {
    id: "google/gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash Lite",
    provider: "google",
    description: "Default fast model for low-cost everyday requests",
    tier: "fast",
    supportsTools: true,
    supportsReasoning: false,
  },
  {
    id: "google/gemini-3-pro-preview",
    name: "Gemini 3 Pro",
    provider: "google",
    description: "Stronger general-purpose model for demanding tasks",
    tier: "balanced",
    supportsTools: true,
    supportsReasoning: false,
  },

  // xAI
  {
    id: "xai/grok-4.1-fast-non-reasoning",
    name: "Grok 4.1 Fast",
    provider: "xai",
    description: "Fast model for latency-sensitive general requests",
    tier: "fast",
    supportsTools: true,
    supportsReasoning: false,
  },

  // Reasoning models
  {
    id: "anthropic/claude-3.7-sonnet-thinking",
    name: "Claude 3.7 Sonnet",
    provider: "anthropic",
    description: "Extended thinking for difficult reasoning and coding tasks",
    tier: "reasoning",
    supportsTools: false,
    supportsReasoning: true,
  },
  {
    id: "xai/grok-code-fast-1-thinking",
    name: "Grok Code Fast",
    provider: "xai",
    description: "Reasoning-focused option for challenging code tasks",
    tier: "reasoning",
    supportsTools: false,
    supportsReasoning: true,
  },
];

export const modelById = new Map(
  chatModels.map((model) => [model.id, model])
);

export function getChatModel(modelId: string): ChatModel | undefined {
  return modelById.get(modelId);
}

// Group models by provider for UI
export const modelsByProvider = chatModels.reduce(
  (acc, model) => {
    if (!acc[model.provider]) {
      acc[model.provider] = [];
    }
    acc[model.provider].push(model);
    return acc;
  },
  {} as Record<string, ChatModel[]>
);
