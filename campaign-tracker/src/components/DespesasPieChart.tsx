import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface Despesa {
  categoria: string;
  valor: number;
}

interface Props {
  dados: Despesa[];
  titulo: string;
}

const COLORS = ["#003A6C", "#FD8973", "#FFBF65", "#5129b3"];

const DespesasPieChart = ({ dados, titulo }: Props) => {
  return (
    <div className="w-full h-75-[350px] md:h-100 flex flex-col min-w-0">
      <h3 className="text-base sm:text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100 wrap-break-word">
        {titulo}
      </h3>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dados}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={4}
              dataKey="valor"
              nameKey="categoria"
            >
              {dados.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                borderRadius: "8px",
                border: "none",
                color: "#fff",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#fff" }}
            />

            <Legend
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "10px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DespesasPieChart;