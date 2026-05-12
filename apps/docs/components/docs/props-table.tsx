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
    <div className="overflow-x-auto rounded-lg border border-wuko-border bg-wuko-card/40">
      <table className="w-full text-left align-top text-[13.5px]">
        <thead className="border-b border-wuko-border/70 bg-wuko-card/60">
          <tr>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-wuko-text-muted">
              Prop
            </th>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-wuko-text-muted">
              Type
            </th>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-wuko-text-muted">
              Default
            </th>
            <th className="px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-wuko-text-muted">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-wuko-border/50 last:border-b-0"
            >
              <td className="px-3.5 py-3 font-mono text-[12.5px] whitespace-nowrap text-wuko-accent">
                {row.name}
              </td>
              <td className="px-3.5 py-3 font-mono text-[12.5px] text-wuko-text">
                {row.type}
              </td>
              <td className="px-3.5 py-3 font-mono text-[12.5px] whitespace-nowrap text-wuko-text-muted">
                {row.default}
              </td>
              <td className="px-3.5 py-3 text-wuko-text">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
