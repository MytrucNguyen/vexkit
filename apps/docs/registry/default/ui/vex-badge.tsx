import * as React from "react";

function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export type BadgeVariant =
  | "default"
  | "teal"
  | "success"
  | "warning"
  | "danger"
  | "outline";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-vex-card text-vex-text border-vex-border",
  teal: "bg-vex-accent/15 text-vex-accent border-vex-accent/30",
  success:
    "bg-vex-success-fg/15 text-vex-success-fg border-vex-success-fg/30",
  warning:
    "bg-vex-warning-fg/15 text-vex-warning-fg border-vex-warning-fg/30",
  danger:
    "bg-vex-danger-fg/15 text-vex-danger-fg border-vex-danger-fg/30",
  outline: "bg-transparent text-vex-text border-vex-border",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
