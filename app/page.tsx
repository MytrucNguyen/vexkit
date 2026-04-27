import Image from "next/image";
import { Layers, Palette, Zap } from "lucide-react";

import InstallCommand from "@/app/_components/InstallCommand";
import FeatureCard from "@/app/_components/FeatureCard";

const FEATURES = [
  {
    icon: <Palette className="size-5 text-vex-accent" />,
    title: "Themeable",
    desc: "Token-based design system. Override any color, radius, or spacing with CSS variables — no rebuild required.",
  },
  {
    icon: <Layers className="size-5 text-vex-accent" />,
    title: "Composable",
    desc: "Headless primitives meet styled defaults. Use the parts you want, override the parts you don't.",
  },
  {
    icon: <Zap className="size-5 text-vex-accent" />,
    title: "Production-ready",
    desc: "Tree-shakeable, typed, ARIA-correct. Ships with SSR support out of the box.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <Image
        src="/images/vex.png"
        alt="Vex the kitsune mascot"
        width={144}
        height={144}
        priority
      />
      <h1 className="text-7xl font-bold text-vex-text">
        Vex<span className="text-vex-accent">Kit</span>
      </h1>
      <p className="text-xl text-vex-text-muted">
        A themeable React component library. Built for production.
      </p>

      <p className="text-sm text-vex-text-muted">
        Accessible. Composable. Tree-shakeable. Zero runtime CSS-in-JS.
      </p>

      <InstallCommand />
      <div className="max-w-6xl mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map(({ icon, title, desc }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={desc}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
