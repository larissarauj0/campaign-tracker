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
  titulo: string;
  descricao: string;
};

function CampanhasChart({ campanhas, titulo, descricao }: CampanhasChartProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">{titulo}</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {descricao}
      </p>
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
