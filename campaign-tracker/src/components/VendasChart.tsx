import type { Venda } from "../types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type VendasChartProps = {
  vendas: Venda[];
  titulo: string;
  descricao: string;
};

function VendasChart({ vendas, titulo, descricao }: VendasChartProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">{titulo}</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {descricao}
      </p>
      <ResponsiveContainer width="100%" height={300}>
        {" "}
        <LineChart data={vendas}>
          {" "}
          <Tooltip />
          <Legend />
          <XAxis dataKey="mes" />{" "}
          <Line name="Receita" stroke="#6366f1" dataKey="receita" />
          <Line name="Meta" stroke="#f43f5e" dataKey="meta" /> <YAxis />{" "}
        </LineChart>{" "}
      </ResponsiveContainer>
    </div>
  );
}

export default VendasChart;
