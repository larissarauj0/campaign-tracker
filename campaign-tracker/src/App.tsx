import { useState, useEffect } from "react";
import MetricCard from "./components/MetricCard.tsx";
import DarkMode from "./components/DarkMode.tsx";
import { getLeads, getCampanhas, getVendas } from "./services/api";
import type { Lead, Campanha, Venda } from "./types";

const App = () => {
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
  const totalConversoes =
    campanhas?.reduce((acc, c) => acc + c.conversoes, 0) ?? 0;
  const taxaConversao =
    totalLeads > 0 ? Math.round((totalConversoes / totalLeads) * 100) : 0;
  const totalReceita = vendas?.reduce((acc, c) => acc + c.receita, 0) ?? 0;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="border-b border-zinc-400 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4">
        <div className="flex items-center flex-wrap justify-center sm:justify-start">
          <DarkMode />
        </div>
      </header>
      {erroLeads && <p className="text-red-500">{erroLeads}</p>}
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <MetricCard
            titulo="Leads"
            valor={leads?.length ?? 0}
            icone={"📈"}
            variacao={4}
          />
          <MetricCard
            titulo="Conversão"
            valor={taxaConversao}
            icone={"📈"}
            variacao={-10}
          />
          <MetricCard
            titulo="Receita"
            valor={totalReceita}
            icone={"📈"}
            variacao={-90}
          />
          <MetricCard
            titulo="Campanhas"
            valor={campanhas?.length ?? 0}
            icone={"📈"}
            variacao={7}
          />
        </div>
      )}
    </div>
  );
};

export default App;
