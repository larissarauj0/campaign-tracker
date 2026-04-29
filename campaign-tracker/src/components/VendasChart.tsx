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
};

function VendasChart({ vendas }: VendasChartProps) {
  return (
    <div>
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
