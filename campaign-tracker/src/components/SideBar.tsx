import { Link } from "react-router-dom";
import LogoLight from "../assets/campaign_tracker_logolight.png";
import LogoDark from "../assets/campaign_tracker_logodark.png";

const SideBar = () => {
  return (
    <div className="w-full sm:w-64 bg-zinc-200 dark:bg-zinc-900 p-4 sm:p-6 md:p-8 shrink-0">
      <div className="flex items-center justify-center sm:justify-start">
        <img
          src={LogoLight}
          className="h-8 sm:h-10 block dark:hidden object-contain"
          alt="Logo"
        />

        <img
          src={LogoDark}
          className="h-8 sm:h-10 hidden dark:block object-contain"
          alt="Logo"
        />
      </div>

      <ul className="flex flex-col sm:flex-col gap-2 mt-6 overflow-x-auto sm:overflow-visible">
        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer whitespace-nowrap">
          <Link
            to="/"
            className="block px-2 py-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            Dashboard
          </Link>
        </li>

        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer whitespace-nowrap">
          <Link
            to="/contas"
            className="block px-2 py-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            Contas
          </Link>
        </li>

        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer whitespace-nowrap">
          <Link
            to="/transacoes"
            className="block px-2 py-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            Transações
          </Link>
        </li>

        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer whitespace-nowrap">
          <Link
            to="/investimentos"
            className="block px-2 py-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            Investimentos
          </Link>
        </li>

        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer whitespace-nowrap">
          <Link
            to="/configuracoes"
            className="block px-2 py-2 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
          >
            Configurações
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
