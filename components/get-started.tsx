"use client";

import { CodeBlockCommand } from "@/components/code-block-command";
import { AGENT_AUDIT_PROMPT } from "@/lib/agent-prompt";

export function GetStarted() {
  return (
    <CodeBlockCommand
      bun="bunx shadscan-svelte"
      npm="npx shadscan-svelte"
      pnpm="pnpm dlx shadscan-svelte"
      prompt={AGENT_AUDIT_PROMPT}
      yarn="yarn dlx --quiet --package shadscan-svelte shadscan-svelte"
    />
  );
}
