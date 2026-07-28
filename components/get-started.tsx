"use client";

import { CodeBlockCommand } from "@/components/code-block-command";
import { AGENT_AUDIT_PROMPT } from "@/lib/agent-prompt";

export function GetStarted() {
  return (
    <CodeBlockCommand
      bun="bunx @shadscan-svelte/cli"
      npm="npx @shadscan-svelte/cli"
      pnpm="pnpm dlx @shadscan-svelte/cli"
      prompt={AGENT_AUDIT_PROMPT}
      yarn="yarn dlx --quiet --package @shadscan-svelte/cli shadscan-svelte"
    />
  );
}
