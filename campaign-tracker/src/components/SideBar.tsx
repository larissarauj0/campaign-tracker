import { Link } from "react-router-dom";
import LogoLight from "../assets/campaign_tracker_logolight.png";
import LogoDark from "../assets/campaign_tracker_logodark.png";
const SideBar = () => {
  return (
    <div className="w-64 bg-[#F0EEEB] dark:bg-zinc-900 p-4 sm:p-6 md:p-8">
      <img src={LogoLight} className="h-8 sm:h-10 block dark:hidden" />
      <img src={LogoDark} className="h-8 sm:h-10 hidden dark:block" />
      <ul className="space-y-2 mt-6">
        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
          {" "}
          <Link to="/"> Dashboard</Link>{" "}
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
          {" "}
          <Link to="/contas">Contas</Link>{" "}
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
          {" "}
          <Link to="/transacoes">Transações</Link>{" "}
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
          {" "}
          <Link to="/investimentos">Investimentos</Link>{" "}
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">
          {" "}
          <Link to="/configuracoes">Configurações</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
