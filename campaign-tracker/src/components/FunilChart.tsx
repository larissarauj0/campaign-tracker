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
};

function FunilChart({ dados }: FunilChartProps) {
  return (
    <div>
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
