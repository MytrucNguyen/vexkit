import { ArrowRight, Trash2, Zap } from "lucide-react";

import { CodeBlock } from "@/components/docs/code-block";
import { H2 } from "@/components/docs/h2";
import { Pager } from "@/components/docs/pager";
import { PropsTable } from "@/components/docs/props-table";
import { Button } from "@/registry/default/ui/vex-button";

export const metadata = {
  title: "Button — VexKit",
};

const USAGE_SAMPLE = `import { Button } from "@/components/ui/vex-button";

export function Example() {
  return <Button variant="primary">Deploy</Button>;
}`;

const VARIANTS_SAMPLE = `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`;

const SIZES_SAMPLE = `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`;

const STATES_SAMPLE = `<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button loading>Saving…</Button>`;

const ICONS_SAMPLE = `import { ArrowRight, Trash2, Zap } from "lucide-react";

<Button leftIcon={<Zap className="size-4" />}>Deploy</Button>
<Button variant="outline" rightIcon={<ArrowRight className="size-4" />}>
  Continue
</Button>
<Button variant="danger" leftIcon={<Trash2 className="size-4" />}>
  Delete project
</Button>`;

const PROPS_ROWS = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "danger"',
    default: '"primary"',
    description: "Visual hierarchy of the button.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Controls height, horizontal padding, and font size.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description:
      "Shows a spinner in place of leftIcon, sets aria-busy, and disables interaction.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Prevents user interaction via the native disabled attribute.",
  },
  {
    name: "leftIcon",
    type: "ReactNode",
    default: "—",
    description: "Element rendered before the children. Hidden while loading.",
  },
  {
    name: "rightIcon",
    type: "ReactNode",
    default: "—",
    description: "Element rendered after the children. Hidden while loading.",
  },
  {
    name: "...rest",
    type: "ButtonHTMLAttributes<HTMLButtonElement>",
    default: "—",
    description: "All native button attributes are forwarded to the element.",
  },
];

function ExampleSurface({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-3 rounded-lg border border-vex-border bg-vex-card/40 p-6">
      {children}
    </div>
  );
}

export default function ButtonPage() {
  return (
    <>
      <header className="mb-8">
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vex-text-muted">
          Components
        </div>
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-vex-heading">
          Button
        </h1>
        <p className="text-[15px] leading-relaxed text-vex-text">
          Triggers an action. Buttons are how users commit to a primary,
          contextual, or destructive intent — pick the variant that matches the
          weight of the action.
        </p>
      </header>

      <H2 id="usage">Usage</H2>
      <ExampleSurface>
        <Button variant="primary">Deploy</Button>
      </ExampleSurface>
      <CodeBlock
        filename="components/example.tsx"
        lang="tsx"
        code={USAGE_SAMPLE}
      />

      <H2 id="variants">Variants</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Five variants cover the full hierarchy from{" "}
        <em>this is the action</em> down to <em>subtle, contextual, optional</em>.
      </p>
      <ExampleSurface>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={VARIANTS_SAMPLE} />

      <H2 id="sizes">Sizes</H2>
      <ExampleSurface>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={SIZES_SAMPLE} />

      <H2 id="states">States</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        <code>disabled</code> blocks interaction; <code>loading</code> swaps the
        leading slot for a spinner, sets <code>aria-busy</code>, and disables
        the button.
      </p>
      <ExampleSurface>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Saving…</Button>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={STATES_SAMPLE} />

      <H2 id="icons">With icons</H2>
      <p className="mb-4 text-[14px] leading-relaxed text-vex-text">
        Pass any <code>ReactNode</code> to <code>leftIcon</code> or{" "}
        <code>rightIcon</code>. The button takes care of spacing.
      </p>
      <ExampleSurface>
        <Button leftIcon={<Zap className="size-4" />}>Deploy</Button>
        <Button
          variant="outline"
          rightIcon={<ArrowRight className="size-4" />}
        >
          Continue
        </Button>
        <Button
          variant="danger"
          leftIcon={<Trash2 className="size-4" />}
        >
          Delete project
        </Button>
      </ExampleSurface>
      <CodeBlock lang="tsx" code={ICONS_SAMPLE} />

      <H2 id="props">Props</H2>
      <PropsTable rows={PROPS_ROWS} />

      <H2 id="accessibility">Accessibility</H2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-vex-text">
        <li>
          Renders a native <code>&lt;button&gt;</code> element. Tab focus,
          Enter, and Space activation work without extra wiring.
        </li>
        <li>
          The <code>loading</code> state sets <code>aria-busy=&quot;true&quot;</code>
          {" "}and disables interaction; the spinner SVG is{" "}
          <code>aria-hidden</code> so screen readers announce the button text
          (e.g. &ldquo;Saving…&rdquo;) as the progress indicator.
        </li>
        <li>
          <code>disabled</code> uses the native attribute, which removes the
          element from the tab order and blocks click events.
        </li>
        <li>
          Focus is announced visually with a 2px outline in{" "}
          <code>--vex-accent</code> at a 2px offset, visible against any
          background.
        </li>
      </ul>

      <Pager
        prev={{ title: "Quick Start", path: "/docs/quick-start" }}
        next={{ title: "Input", path: "/docs/components/input" }}
      />
    </>
  );
}
