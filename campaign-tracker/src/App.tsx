import { Outlet } from "react-router-dom";

import DarkMode from "./components/DarkMode";
import Sidebar from "./components/SideBar.tsx";

import Logo from "./assets/campaign_tracker_logolight.png"

import { LuUser } from "react-icons/lu";

import { Link } from "react-router-dom";

const App = () => {

  return (
    // Alterado: h-screen continua, mas garantimos que o flex-col (mobile) e flex-row (desktop) funcionem bem
    <div className="h-screen bg-[#F0EEEB] dark:bg-[#13181B] text-[#13181B] dark:text-[#CCD5DA] flex flex-col sm:flex-row overflow-hidden">
      <Sidebar />

      {/* h-full garante que esta div ocupe a altura restante */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        <header className="border-b border-[#CCD5DA] dark:border-zinc-800 flex items-center justify-end p-3 sm:p-4 gap-4 shrink-0">
          <div className="flex items-center">
            <div className="p-2 bg-zinc-300 dark:bg-zinc-800 rounded-full text-lg cursor-pointer">
              <Link to="/configuracoes">
                <LuUser />
              </Link>
            </div>
            <DarkMode />
          </div>
        </header>

        {/* ALTERAÇÃO CHAVE: overflow-y-auto permite rolar o conteúdo interno */}
        <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden p-4">
          <Outlet />
        </main>

        <footer className="border-t border-[#CCD5DA] dark:border-zinc-800 flex justify-center sm:justify-between items-center p-3 sm:p-4 gap-4 shrink-0">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
            © 2026 Campaign Tracker. Todos os direitos reservados.
          </p>
          <img src={Logo} className="h-4 sm:h-6 block object-contain" alt="Logo" />
        </footer>
      </div>
    </div>
  );
};


export default App;
