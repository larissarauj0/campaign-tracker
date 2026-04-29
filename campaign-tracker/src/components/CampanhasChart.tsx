import type { Campanha } from "../types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type CampanhasChartProps = {
  campanhas: Campanha[];
};

function CampanhasChart({ campanhas }: CampanhasChartProps) {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        {" "}
        <BarChart data={campanhas}>
          {" "}
          <Tooltip />
          <Legend />
          <XAxis dataKey="nome" />{" "}
          <Bar name="Orçamento" fill="#f59e0b" dataKey="orcamento" />
          <Bar name="Gasto" fill="#06b6d4" dataKey="gasto" />
          <Bar name="Leads" fill="#6366f1" dataKey="leads" />
          <Bar name="Conversões" fill="#10b981" dataKey="conversoes" />
          <YAxis />{" "}
        </BarChart>{" "}
      </ResponsiveContainer>
    </div>
  );
}

export default CampanhasChart;
