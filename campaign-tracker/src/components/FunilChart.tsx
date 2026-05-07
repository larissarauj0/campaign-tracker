import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type DadoFunil = {
  etapa: string;
  quantidade: number;
};

type FunilChartProps = {
  dados: DadoFunil[];
  titulo: string;
  descricao: string;
};

function FunilChart({ dados, titulo, descricao }: FunilChartProps) {
  return (
    <div className="w-full">
      <h2 className="text-base sm:text-lg font-semibold mb-1">{titulo}</h2>

      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {descricao}
      </p>

      <div className="w-full h-62.5 sm:h-75 md:h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dados}>
            <Tooltip />
            <Legend />

            <XAxis
              dataKey="etapa"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 10 }}
            />

            <YAxis tick={{ fontSize: 10 }} />

            <Bar name="Quantidade" fill="#5129b3" dataKey="quantidade" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FunilChart;
