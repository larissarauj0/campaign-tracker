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
    <div className="w-full min-w-0">
      <h2 className="text-base sm:text-lg font-semibold mb-1 wrap-break-word">
        {titulo}
      </h2>

      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400] mb-4 wrap-break-word">
        {descricao}
      </p>

      <div className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={campanhas}
            margin={{
              top: 10,
              right: 10,
              left: 15,
              bottom: 20,
            }}
          >
            <Tooltip />

            <Legend
              wrapperStyle={{
                fontSize: "12px",
              }}
            />

            <XAxis
              dataKey="nome"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={70}
              tick={{ fontSize: 10 }}
            />

            <YAxis tick={{ fontSize: 10 }} width={40} />

            <Bar
              name="Orçamento"
              fill="#003A6C"
              dataKey="orcamento"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              name="Gasto"
              fill="#FFBF65"
              dataKey="gasto"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              name="Leads"
              fill="#FD8973"
              dataKey="leads"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              name="Conversões"
              fill="#10b981"
              dataKey="conversoes"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CampanhasChart;
