import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { InfoCallout } from "@/components/docs/info-callout";
import { Pager } from "@/components/docs/pager";
import { getRegistryItemUrl } from "@/lib/registry/base-url";

export const metadata = {
  title: "Installation | VexKit",
};

const TOKENS_SNIPPET = `@import "tailwindcss";

@custom-variant light (&:where([data-theme="light"] *));

:root {
  --wuko-bg: #0f172a;
  --wuko-card: #1e293b;
  --wuko-border: #334155;
  --wuko-heading: #e2e8f0;
  --wuko-text: #cbd5e1;
  --wuko-text-muted: #94a3b8;
  --wuko-accent: #5eead4;
  --wuko-accent-hover: #2dd4bf;
  --wuko-accent-active: #14b8a6;
  --wuko-danger: #e11d48;
  --wuko-danger-hover: #be123c;
  --wuko-danger-fg: #fb7185;
  --wuko-success-fg: #10b981;
  --wuko-warning-fg: #f59e0b;
  --wuko-gold: #d4a017;
  color-scheme: dark;
}

[data-theme="light"] {
  --wuko-bg: #f8fafc;
  --wuko-card: #ffffff;
  --wuko-border: #e2e8f0;
  --wuko-heading: #0f172a;
  --wuko-text: #475569;
  --wuko-text-muted: #64748b;
  --wuko-accent: #0f766e;
  --wuko-accent-hover: #0d9488;
  --wuko-accent-active: #134e4a;
  --wuko-danger: #dc2626;
  --wuko-danger-hover: #b91c1c;
  --wuko-danger-fg: #b91c1c;
  --wuko-success-fg: #047857;
  --wuko-warning-fg: #92400e;
  --wuko-gold: #d4a017;
  color-scheme: light;
}

@theme inline {
  --color-wuko-bg: var(--wuko-bg);
  --color-wuko-card: var(--wuko-card);
  --color-wuko-border: var(--wuko-border);
  --color-wuko-heading: var(--wuko-heading);
  --color-wuko-text: var(--wuko-text);
  --color-wuko-text-muted: var(--wuko-text-muted);
  --color-wuko-accent: var(--wuko-accent);
  --color-wuko-accent-hover: var(--wuko-accent-hover);
  --color-wuko-accent-active: var(--wuko-accent-active);
  --color-wuko-danger: var(--wuko-danger);
  --color-wuko-danger-hover: var(--wuko-danger-hover);
  --color-wuko-danger-fg: var(--wuko-danger-fg);
  --color-wuko-success-fg: var(--wuko-success-fg);
  --color-wuko-warning-fg: var(--wuko-warning-fg);
  --color-wuko-gold: var(--wuko-gold);
}`;

export default function InstallationPage() {
  const installCommand = `npx shadcn@latest add ${getRegistryItemUrl("placeholder")}`;

  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-wuko-text-muted">
          Getting Started
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-wuko-heading">
          Installation
        </h1>
        <p className="text-[15px] leading-relaxed text-wuko-text">
          Add VexKit&apos;s shadcn-style component registry to your project.
          Components land directly in your codebase, themed by VexKit&apos;s
          role tokens, ready to customize.
        </p>
      </header>

      <InfoCallout title="Prerequisites">
        VexKit requires <code>Tailwind v4</code> (the <code>@theme inline</code>{" "}
        pattern is v4-only) and <code>React 19+</code>. If your project is on
        Tailwind v3, migrate to v4 before continuing.
      </InfoCallout>

      <H2 id="initialize-shadcn">1. Initialize shadcn</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        VexKit components are distributed through the shadcn CLI. Run{" "}
        <code>init</code> once in your project. It creates{" "}
        <code>components.json</code> and adds <code>lib/utils.ts</code> with the{" "}
        <code>cn</code> helper.
      </p>
      <CodeBlock filename="terminal" lang="bash" code="npx shadcn@latest init" />

      <H2 id="set-up-tokens">2. Set up VexKit&apos;s role tokens</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Paste the block below into your <code>app/globals.css</code> (or
        wherever you import Tailwind). It defines VexKit&apos;s public role
        tokens for both dark and light modes, and wires them as Tailwind v4
        utility classes (<code>bg-wuko-card</code>, <code>text-wuko-text</code>,{" "}
        and so on).
      </p>
      <CodeBlock
        filename="app/globals.css"
        lang="css"
        code={TOKENS_SNIPPET}
      />
      <p className="mt-3 text-[13px] leading-relaxed text-wuko-text-muted">
        Without this block, VexKit components install but render with undefined
        utility classes. The role tokens are the foundation of the design
        system.
      </p>

      <H2 id="add-a-component">3. Add a component</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        Pull any VexKit primitive into your codebase via the shadcn CLI:
      </p>
      <CodeBlock filename="terminal" lang="bash" code={installCommand} />
      <p className="mt-3 text-[13px] leading-relaxed text-wuko-text-muted">
        VexKit&apos;s registry is currently served from{" "}
        <code>localhost:3000</code> during development. Replace the URL with
        the production origin once VexKit is publicly hosted.
      </p>

      <H2 id="verify-theming">4. Verify theming</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-wuko-text">
        The component lands at <code>components/ui/placeholder.tsx</code>{" "}
        (per your <code>components.json</code> aliases). To verify the role
        tokens flip correctly, set{" "}
        <code>{'<html data-theme="light">'}</code> in your dev tools or your
        layout. The component will switch to light values automatically.
      </p>
      <InfoCallout>
        Build a real theme toggle later, or copy VexKit&apos;s pattern from{" "}
        <code>THEMING.md</code>. The tokens you just installed are designed to
        respond to <code>data-theme</code> changes without component-side code.
      </InfoCallout>

      <Pager next={{ title: "Quick Start", path: "/docs/quick-start" }} />
    </>
  );
}
