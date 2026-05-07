import { useState, useEffect } from "react";
import MetricCard from "../components/MetricCard";
import { getLeads, getCampanhas, getVendas } from "../services/api";
import type { Lead, Campanha, Venda } from "../types";
import VendasChart from "../components/VendasChart";
import CampanhasChart from "../components/CampanhasChart";
import FunilChart from "../components/FunilChart";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import { LuChartPie, LuChartNoAxesCombined, LuFileChartPie, LuChartColumnBig } from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [erroLeads, setErroLeads] = useState<string | null>(null);

  const [campanhas, setCampanhas] = useState<Campanha[] | null>(null);
  const [loadingCampanhas, setLoadingCampanhas] = useState(true);

  const [vendas, setVendas] = useState<Venda[] | null>(null);
  const [loadingVendas, setLoadingVendas] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [dadosLeads, dadosCampanhas, dadosVendas] = await Promise.all([
          getLeads(),
          getCampanhas(),
          getVendas(),
        ]);
        setLeads(dadosLeads);
        setCampanhas(dadosCampanhas);
        setVendas(dadosVendas);
      } catch {
        setErroLeads("Erro ao buscar dados");
      } finally {
        setLoadingLeads(false);
        setLoadingCampanhas(false);
        setLoadingVendas(false);
      }
    }
    load();
  }, []);

  const isLoading = loadingLeads || loadingCampanhas || loadingVendas;

  const totalLeads = campanhas?.reduce((acc, c) => acc + c.leads, 0) ?? 0;
  const totalConversoes = campanhas?.reduce((acc, c) => acc + c.conversoes, 0) ?? 0;
  const taxaConversao = totalLeads > 0 ? Math.round((totalConversoes / totalLeads) * 100) : 0;
  const totalReceita = vendas?.reduce((acc, c) => acc + c.receita, 0) ?? 0;

  const dadosFunil = [
    { etapa: "Novo", quantidade: leads?.filter((l) => l.status === "novo").length ?? 0 },
    { etapa: "Em Negociação", quantidade: leads?.filter((l) => l.status === "em_negociacao").length ?? 0 },
    { etapa: "Convertido", quantidade: leads?.filter((l) => l.status === "convertido").length ?? 0 },
    { etapa: "Perdido", quantidade: leads?.filter((l) => l.status === "perdido").length ?? 0 },
  ];

  return (
    <div className="p-3 sm:p-4 md:p-6 flex flex-col gap-6">
      {erroLeads && <p className="text-red-500">{erroLeads}</p>}

      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center">
          <ClipLoader color="#18181b" size={40} />
        </div>
      ) : (
        <>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             > <MetricCard titulo="Leads" valor={leads?.length ?? 0} icone={<LuChartPie />} variacao={4} />
              <MetricCard titulo="Conversão" valor={taxaConversao} icone={<LuChartNoAxesCombined />} variacao={-10} />
              <MetricCard titulo="Receita" valor={totalReceita} icone={<LuChartColumnBig />} variacao={-90} />
              <MetricCard titulo="Campanhas" valor={campanhas?.length ?? 0} icone={<LuFileChartPie />} variacao={7} />
            </div>
          </motion.div

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-3 sm:p-4">
            <VendasChart vendas={vendas ?? []} titulo="Receita vs Meta" descricao="Comparativo mensal de receita realizada e meta" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-3 sm:p-4">
            <CampanhasChart campanhas={campanhas ?? []} titulo="Desempenho de Campanhas" descricao="Comparativo de orçamento, gasto, leads e conversões por campanha" />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-3 sm:p-4">
            <FunilChart dados={dadosFunil} titulo="Funil de Conversão" descricao="Distribuição de leads por etapa do processo de vendas" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Home;