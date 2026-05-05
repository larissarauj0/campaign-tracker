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
    <div className="w-full">
      <h2 className="text-base sm:text-lg font-semibold mb-1">
        {titulo}
      </h2>

      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {descricao}
      </p>

      <div className="w-full h-62.5 sm:h-75 md:h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={campanhas}>
            <Tooltip />
            <Legend />

            <XAxis
              dataKey="nome"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10 }}
            />

            <YAxis tick={{ fontSize: 10 }} />

            <Bar name="Orçamento" fill="#f59e0b" dataKey="orcamento" />
            <Bar name="Gasto" fill="#06b6d4" dataKey="gasto" />
            <Bar name="Leads" fill="#6366f1" dataKey="leads" />
            <Bar name="Conversões" fill="#10b981" dataKey="conversoes" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CampanhasChart;