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
    <div className="w-full min-w-0">
      <h2 className="text-base sm:text-lg font-semibold mb-1 wrap-break-word">
        {titulo}
      </h2>

      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4 wrap-break-word">
        {descricao}
      </p>

      <div className="w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dados}
            margin={{
              top: 10,
              right: 10,
              left: -15,
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
              dataKey="etapa"
              interval={0}
              angle={-20}
              textAnchor="end"
              height={70}
              tick={{ fontSize: 10 }}
            />

            <YAxis tick={{ fontSize: 10 }} width={40} />

            <Bar
              name="Quantidade"
              fill="#5129b3"
              dataKey="quantidade"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FunilChart;