import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface Despesa {
  categoria: string;
  valor: number;
}

interface Props {
  dados: Despesa[];
  titulo: string;
}

const COLORS = ["#18181b", "#3f3f46", "#71717a", "#a1a1aa"];

const DespesasPieChart = ({ dados, titulo }: Props) => {
  return (
    <div className="w-full h-87.5 flex flex-col">
      <h3 className="text-lg font-semibold mb-1 text-zinc-900 dark:text-zinc-100">{titulo}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dados}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="valor"
            nameKey="categoria"
          >
            {dados.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: "#18181b", borderRadius: "8px", border: "none", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DespesasPieChart;
