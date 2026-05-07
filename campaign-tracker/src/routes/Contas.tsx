import { useState, useEffect } from "react";
import MetricCard from "../components/MetricCard";
import DespesasPieChart from "../components/DespesasPieChart";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import { LuWallet, LuBanknote, LuPercent } from "react-icons/lu";

interface Metricas {
  faturamento: number;
  lucroLiquido: number;
  margemLucro: number;
}

interface Despesa {
  categoria: string;
  valor: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contas = () => {
  const [metricas, setMetricas] = useState<Metricas | null>(null);
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const mockMetricas = {
        faturamento: 45000,
        lucroLiquido: 17550,
        margemLucro: 39,
      };

      const mockDespesas = [
        { categoria: "Anúncios", valor: 8400 },
        { categoria: "Produtos", valor: 12000 },
      ];

      setMetricas(mockMetricas);
      setDespesas(mockDespesas);
      setLoading(false);
    }

    load();
  }, []);

  return (
    <div className="p-3 sm:p-4 md:p-6 flex flex-col gap-6 w-full min-w-0">
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <ClipLoader color="#94a3b8" size={40} />
        </div>
      ) : (
        <>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <MetricCard
                titulo="Faturamento"
                valor={metricas?.faturamento ?? 0}
                icone={<LuBanknote />}
                variacao={8}
              />

              <MetricCard
                titulo="Despesas"
                valor={26267}
                icone={<LuBanknote />}
                variacao={3}
              />

              <MetricCard
                titulo="Lucro Líquido"
                valor={metricas?.lucroLiquido ?? 0}
                icone={<LuWallet />}
                variacao={15}
              />

              <MetricCard
                titulo="Margem"
                valor={metricas?.margemLucro ?? 0}
                icone={<LuPercent />}
                variacao={2}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-4 sm:p-6 min-w-0"
            >
              <h3 className="text-base sm:text-lg font-bold mb-4 wrap-break-wordword">
                Detalhamento de Despesas
              </h3>

              <div className="space-y-4">
                {despesas.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 border-b border-zinc-300 dark:border-zinc-800 pb-2"
                  >
                    <span className="text-zinc-500 wrap-break-word">
                      {d.categoria}
                    </span>

                    <span className="font-medium text-red-500 whitespace-nowrap">
                      - R$ {d.valor}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 min-w-0">
              {/* Gráfico */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-3 sm:p-4 min-w-0"
              >
                <DespesasPieChart
                  dados={despesas}
                  titulo="Distribuição de Custos"
                />
              </motion.div>

              {/* Lista */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-4 sm:p-6 min-w-0"
              >
                <h3 className="text-base sm:text-lg font-bold mb-4 wrap-break-word">
                  Detalhamento Financeiro
                </h3>

                <div className="space-y-4">
                  {despesas.map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 border-b border-zinc-300 dark:border-zinc-800 pb-2"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="font-medium text-zinc-900 dark:text-zinc-100 wrap-break-word">
                          {d.categoria}
                        </span>

                        <span className="text-xs text-zinc-500 wrap-break-word">
                          Custo fixo/variável
                        </span>
                      </div>

                      <span className="font-bold text-red-500 whitespace-nowrap">
                        - R$ {d.valor.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  ))}

                  <div className="pt-4 flex items-center justify-between gap-4 font-bold text-zinc-900 dark:text-zinc-100 border-t border-zinc-300 dark:border-zinc-800">
                    <span className="wrap-break-word">
                      Total de Despesas
                    </span>

                    <span className="whitespace-nowrap">
                      R${" "}
                      {despesas
                        .reduce((acc, curr) => acc + curr.valor, 0)
                        .toLocaleString("pt-BR")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contas;