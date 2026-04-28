import type { ReactNode } from "react";

export interface PropsTableRow {
  name: string;
  type: string;
  default: string;
  description: ReactNode;
}

export interface PropsTableProps {
  rows: PropsTableRow[];
}

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-vex-border bg-vex-card/40">
      <table className="w-full text-left align-top text-[13.5px]">
        <thead className="border-b border-vex-border/70 bg-vex-card/60">
          <tr>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
              Prop
            </th>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
              Type
            </th>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
              Default
            </th>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-vex-text-muted">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-vex-border/50 last:border-b-0"
            >
              <td className="px-3.5 py-3 font-mono text-[12.5px] whitespace-nowrap text-vex-accent">
                {row.name}
              </td>
              <td className="px-3.5 py-3 font-mono text-[12.5px] text-vex-text">
                {row.type}
              </td>
              <td className="px-3.5 py-3 font-mono text-[12.5px] whitespace-nowrap text-vex-text-muted">
                {row.default}
              </td>
              <td className="px-3.5 py-3 text-vex-text">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
