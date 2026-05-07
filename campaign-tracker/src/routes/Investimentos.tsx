import { useState, useEffect } from "react";
import MetricCard from "../components/MetricCard";
import { getCampanhas } from "../services/api";
import type { Campanha } from "../types";

import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

import {
  LuTrendingUp,
  LuDollarSign,
  LuTarget,
  LuMousePointerClick,
} from "react-icons/lu";

import CampanhasChart from "../components/CampanhasChart";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Investimentos = () => {
  const [campanhas, setCampanhas] = useState<Campanha[] | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const dados = await getCampanhas();
        setCampanhas(dados);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const totalGasto =
    campanhas?.reduce((acc, c) => acc + c.gasto, 0) ?? 0;

  const totalOrcamento =
    campanhas?.reduce((acc, c) => acc + c.orcamento, 0) ?? 0;

  const totalLeads =
    campanhas?.reduce((acc, c) => acc + c.leads, 0) ?? 0;

  const cplMedio =
    totalLeads > 0
      ? Number((totalGasto / totalLeads).toFixed(2))
      : 0;

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
                titulo="Total Gasto"
                valor={totalGasto}
                icone={<LuDollarSign />}
                variacao={5}
              />

              <MetricCard
                titulo="Orçamento"
                valor={totalOrcamento}
                icone={<LuTarget />}
                variacao={0}
              />

              <MetricCard
                titulo="CPL Médio"
                valor={cplMedio}
                icone={<LuMousePointerClick />}
                variacao={-2}
              />

              <MetricCard
                titulo="ROI Est."
                valor={3.2}
                icone={<LuTrendingUp />}
                variacao={12}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-3 sm:p-4 min-w-0 overflow-hidden"
          >
            <CampanhasChart
              campanhas={campanhas ?? []}
              titulo="ROI por Canal"
              descricao="Análise de eficiência entre gasto e conversão"
            />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Investimentos;