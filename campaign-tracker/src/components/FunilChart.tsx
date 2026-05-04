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
    <div>
      <h2 className="text-lg font-semibold mb-1">{titulo}</h2>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        {descricao}
      </p>
      <ResponsiveContainer width="100%" height={300}>
        {" "}
        <BarChart data={dados}>
          {" "}
          <Tooltip />
          <Legend />
          <XAxis dataKey="etapa" />{" "}
          <Bar name="Orçamento" fill="#a78bfa" dataKey="quantidade" />
          <YAxis />{" "}
        </BarChart>{" "}
      </ResponsiveContainer>
    </div>
  );
}

export default FunilChart;
