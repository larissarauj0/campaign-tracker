import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importação dos ícones Lucide
import LogoLight from "../assets/campaign_tracker_logolight.png";
import LogoDark from "../assets/campaign_tracker_logodark.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botão Hambúrguer - Visível apenas no Mobile */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 sm:hidden shadow-sm border border-zinc-300 dark:border-zinc-700"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Overlay (Fundo escuro) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* SideBar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-zinc-200 dark:bg-zinc-900 p-6 shrink-0 transform transition-transform duration-300 ease-in-out border-r border-zinc-300 dark:border-zinc-800
          sm:relative sm:translate-x-0 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            <img src={LogoLight} className="h-8 block dark:hidden object-contain" alt="Logo" />
            <img src={LogoDark} className="h-8 hidden dark:block object-contain" alt="Logo" />
          </div>

          {/* Botão de fechar (Mobile) */}
          <button 
            onClick={toggleMenu} 
            className="sm:hidden p-1 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            <X size={24} />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-1">
            {[
              { name: "Dashboard", path: "/" },
              { name: "Contas", path: "/contas" },
              { name: "Transações", path: "/transacoes" },
              { name: "Investimentos", path: "/investimentos" },
              { name: "Configurações", path: "/configuracoes" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
