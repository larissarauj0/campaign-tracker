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
    <div className="w-full p-3 sm:p-4 min-w-0">
      <h2 className="text-base sm:text-lg font-semibold mb-1 wrap-break-word">
        {titulo}
      </h2>

      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4 wrap-break-word">
        {descricao}
      </p>

      <div className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={vendas}
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
              dataKey="mes"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={70}
              tick={{ fontSize: 10 }}
            />

            <YAxis tick={{ fontSize: 10 }} width={40} />

            <Line
              name="Receita"
              stroke="#003A6C"
              dataKey="receita"
              strokeWidth={2}
              dot={false}
            />

            <Line
              name="Meta"
              stroke="#FD8973"
              dataKey="meta"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default VendasChart;
