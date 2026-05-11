import { cn } from "@/lib/utils";

interface CyberTableProps {
  headers: string[];
  rows: string[][];
  className?: string;
}

export const CyberTable = ({ headers, rows, className }: CyberTableProps) => {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md", className)}>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-cyber-cyan">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-white/5 transition-colors hover:bg-white/5 last:border-0"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-sm text-white/80">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
