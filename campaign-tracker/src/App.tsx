import { useState, useEffect } from 'react'
import MetricCard from "./components/MetricCard.tsx"
import DarkMode from "./components/DarkMode.tsx"
import { getLeads, getCampanhas, getVendas } from './services/api'
import type { Lead, Campanha, Venda } from './types'

const App = () => {
  const [leads, setLeads] = useState<Lead[] | null>(null)
  const [loadingLeads, setLoadingLeads] = useState(true)
  const [erroLeads, setErroLeads] = useState<string | null>(null)

  const [campanhas, setCampanhas] = useState<Campanha[] | null>(null)
  const [loadingCampanhas, setLoadingCampanhas] = useState(true)

  const [vendas, setVendas] = useState<Venda[] | null>(null)
  const [loadingVendas, setLoadingVendas] = useState(true)

  const isLoading = loadingLeads || loadingCampanhas || loadingVendas

  useEffect(() => {
    async function load() {
      try {
        const [dadosLeads, dadosCampanhas, dadosVendas] = await Promise.all([
          getLeads(),
          getCampanhas(),
          getVendas()
        ])
        setLeads(dadosLeads)
        setCampanhas(dadosCampanhas)
        setVendas(dadosVendas)
      } catch (error) {
        setErroLeads("Erro ao buscar dados")
      } finally {
        setLoadingLeads(false)
        setLoadingCampanhas(false)
        setLoadingVendas(false)
      }
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="border-b border-zinc-400 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4">
        <div className="flex items-center flex-wrap justify-center sm:justify-start">
          <DarkMode />
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        <MetricCard titulo="Leads" valor={17} icone={"📈"} variacao={4} />
        <MetricCard titulo="Conversão" valor={77} icone={"📈"} variacao={-10} />
        <MetricCard titulo="Receita" valor={20} icone={"📈"} variacao={-90} />
        <MetricCard titulo="Campanhas" valor={-30} icone={"📈"} variacao={7} />
      </div>
    </div>
  );
};

export default App;
