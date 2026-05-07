import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

type MetricCardProps = {
  titulo: string;
  valor: number;
  icone: React.ReactNode;
  variacao: number;
};

function MetricCard({ titulo, valor, icone, variacao }: MetricCardProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg flex flex-col w-full min-w-0 overflow-hidden">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 min-w-0">
          <span className="text-base shrink-0">{icone}</span>

          <span className="truncate">{titulo}</span>
        </span>
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg sm:text-xl md:text-2xl font-bold break-all">
            {valor}
          </span>

          <span
            className={`flex items-center gap-1 text-xs sm:text-sm whitespace-nowrap ${
              variacao > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {variacao > 0 ? <FaAngleUp /> : <FaAngleDown />}
            {variacao}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
