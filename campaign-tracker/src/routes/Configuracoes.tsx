import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuUser,
  LuShieldCheck,
  LuPalette,
  LuGlobe,
  LuSave,
  LuMail,
} from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Configuracoes = () => {
  const [notificacoes, setNotificacoes] = useState(true);
 

  return (
    <div className="p-3 sm:p-4 md:p-6 flex flex-col gap-6 max-w-4xl mx-auto w-full">
      <header>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Configurações
        </h1>
        <p className="text-zinc-500 text-sm">
          Gerencie suas preferências de conta e sistema.
        </p>
      </header>

      {/* Perfil */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-zinc-300 dark:bg-zinc-800 rounded-full text-xl">
            <LuUser />
          </div>
          <h2 className="text-lg font-semibold">Perfil do Usuário</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500 font-medium">
              Nome Completo
            </label>
            <input
              type="text"
              defaultValue="Admin User"
              className="bg-zinc-100 dark:bg-zinc-800 border-none rounded-lg p-2 focus:ring-2 focus:ring-zinc-400 outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-zinc-500 font-medium">E-mail</label>
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-2 gap-2 text-zinc-500">
              <LuMail size={16} />
              <input
                type="email"
                defaultValue="admin@empresa.com"
                className="bg-transparent border-none outline-none w-full text-zinc-900 dark:text-zinc-100"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Preferências do Sistema */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-zinc-300 dark:bg-zinc-800 rounded-full text-xl">
            <LuPalette />
          </div>
          <h2 className="text-lg font-semibold">Sistema</h2>
        </div>

        <div className="space-y-4">
          

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notificações por E-mail</p>
              <p className="text-xs text-zinc-500">
                Receber alertas de novas conversões de leads.
              </p>
            </div>
            <button
              onClick={() => setNotificacoes(!notificacoes)}
              className={`w-12 h-6 rounded-full transition-colors ${notificacoes ? "bg-zinc-700" : "bg-zinc-400"} relative`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notificacoes ? "left-7" : "left-1"}`}
              />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Segurança e Idioma */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <LuShieldCheck className="text-zinc-500" />
            <h3 className="font-semibold">Segurança</h3>
          </div>
          <button className="text-sm bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors w-full">
            Alterar Senha
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <LuGlobe className="text-zinc-500" />
            <h3 className="font-semibold">Região</h3>
          </div>
          <select className="bg-zinc-300 dark:bg-zinc-800 border-none rounded-lg p-2 text-sm w-full outline-none">
            <option>Português (BR)</option>
            <option>English (US)</option>
            <option>Español</option>
          </select>
        </motion.div>
      </div>

      {/* Botão de Salvar */}
      <footer className="flex justify-end pt-4">
        <button className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-6 py-2 rounded-xl font-bold hover:opacity-90 transition-opacity">
          <LuSave size={18} />
          Salvar Alterações
        </button>
      </footer>
    </div>
  );
};

export default Configuracoes;
