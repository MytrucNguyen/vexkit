import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { InstallChip } from "@/components/marketing/install-chip";

function GithubMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-8 pb-24 pt-20 lg:pb-32 lg:pt-28">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/vex.png"
            alt="Vex"
            width={144}
            height={144}
            priority
            className="mb-6 h-28 w-28 drop-shadow-[0_8px_30px_rgba(94,234,212,0.25)] lg:h-36 lg:w-36"
          />

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-vex-accent/30 bg-vex-accent/10 px-3 py-1 text-[12px] font-medium text-vex-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-vex-accent" />
            v0.1.0
          </div>

          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-vex-heading lg:text-7xl">
            Vex<span className="text-vex-accent">Kit</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-vex-text lg:text-xl">
            A themeable React component library. Built for production.
          </p>
          <p className="mt-2 max-w-xl text-[14px] text-vex-text-muted">
            Accessible. Composable. Tree-shakeable. Zero runtime CSS-in-JS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs/installation"
              className="vk-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-vex-accent px-5 text-[15px] font-semibold text-vex-bg shadow-[inset_0_-2px_0_rgba(15,23,42,0.12)] transition-colors hover:bg-vex-accent-hover active:bg-vex-accent-active"
            >
              Get Started
              <ArrowRight size={14} aria-hidden />
            </Link>
            <a
              href="https://github.com/MytrucNguyen/vexkit"
              target="_blank"
              rel="noopener noreferrer"
              className="vk-ring inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-vex-border bg-transparent px-5 text-[15px] font-medium text-vex-heading transition-colors hover:border-vex-text-muted hover:bg-vex-card"
            >
              <GithubMark />
              GitHub
            </a>
          </div>

          <InstallChip />
        </div>
      </div>
    </section>
  );
}
