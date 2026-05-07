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
      // Simulando a chamada com base no seu JSON fornecido
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
    <div className="p-3 sm:p-4 md:p-6 flex flex-col gap-6">
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <ClipLoader color="#18181b" size={40} />
        </div>
      ) : (
        <>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4">
                Detalhamento de Despesas
              </h3>
              <div className="space-y-4">
                {despesas.map((d, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-zinc-300 dark:border-zinc-800 pb-2"
                  >
                    <span className="text-zinc-500">{d.categoria}</span>
                    <span className="font-medium text-red-500">
                      - R$ {d.valor}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Gráfico de Pizza */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-3 sm:p-4"
              >
                <DespesasPieChart
                  dados={despesas}
                  titulo="Distribuição de Custos"
                />
              </motion.div>

              {/* Lista Detalhada */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-4">
                  Detalhamento Financeiro
                </h3>
                <div className="space-y-4">
                  {despesas.map((d, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b border-zinc-300 dark:border-zinc-800 pb-2"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                          {d.categoria}
                        </span>
                        <span className="text-xs text-zinc-500">
                          Custo fixo/variável
                        </span>
                      </div>
                      <span className="font-bold text-red-500">
                        - R$ {d.valor.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 flex justify-between font-bold text-zinc-900 dark:text-zinc-100">
                    <span>Total de Despesas</span>
                    <span>
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
