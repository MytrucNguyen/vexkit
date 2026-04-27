type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-vex-border bg-vex-card p-5">
      <div className="size-10 rounded-md bg-vex-accent/10 border border-vex-accent/30 inline-flex items-center justify-center mb-3">
        {icon}
      </div>
      <div className="font-semibold text-vex-text mb-1">{title}</div>
      <p className="text-vex-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
