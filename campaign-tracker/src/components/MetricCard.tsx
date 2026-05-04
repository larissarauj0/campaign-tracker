import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

type MetricCardProps = {
  titulo: string;
  valor: number;
  icone: React.ReactNode;
  variacao: number;
};

function MetricCard({ titulo, valor, icone, variacao }: MetricCardProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 p-10 rounded-xl m-4 shadow-lg dark:shadow-lg flex flex-col ">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          <span>{icone}</span>
          {titulo}
        </span>
      </div>
      <div>
        <div className="flex flex-row items-center gap-2">
          <span className="text-xl font-bold">{valor}</span>
          <span className={`flex items-center gap-1 ${variacao > 0 ? "text-green-500" : "text-red-500"}`}>
  {variacao > 0 ? <FaAngleUp /> : <FaAngleDown />}
  {variacao}%
</span>
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
