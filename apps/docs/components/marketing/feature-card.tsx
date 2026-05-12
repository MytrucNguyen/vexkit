import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-wuko-border bg-wuko-card/60 p-5 light:bg-wuko-card">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-wuko-accent/15 text-wuko-accent">
        <Icon size={20} aria-hidden />
      </div>
      <div className="mb-1 text-[15px] font-semibold text-wuko-heading">
        {title}
      </div>
      <p className="text-[13px] leading-relaxed text-wuko-text-muted">
        {description}
      </p>
    </div>
  );
}
