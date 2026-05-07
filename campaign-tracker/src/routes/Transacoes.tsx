import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import {
  LuArrowUpRight,
  LuHistory,
  LuBadgeDollarSign,
  LuCalendarDays,
} from "react-icons/lu";
import MetricCard from "../components/MetricCard";
import { getLeads, getLucroHistorico, getVendas } from "../services/api";
import type { Lead, LucroHistorico, Venda } from "../types";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Transacoes = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [historicoLucro, setHistoricoLucro] = useState<LucroHistorico[]>([]);
  const [vendas, setVendas] = useState<Venda[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [dadosLeads, dadosLucro, dadosVendas] = await Promise.all([
          getLeads(),
          getLucroHistorico(),
          getVendas(),
        ]);
        setLeads(dadosLeads);
        setHistoricoLucro(dadosLucro);
        setVendas(dadosVendas);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const lucroSemana = historicoLucro.reduce((acc, item) => acc + item.lucro, 0);

  
  const calcularValorLead = (lead: Lead) => {
    if (lead.status !== "convertido") return 0;

    const mesMap: { [key: string]: string } = {
      "01": "Jan", "02": "Fev", "03": "Mar", "04": "Abr", "05": "Mai", "06": "Jun"
    };
    
    const mesNumero = lead.data.split("-")[1];
    const mesNome = mesMap[mesNumero];
    
    const vendaMes = vendas.find((v) => v.mes === mesNome);
    const receitaTotalMes = vendaMes ? vendaMes.receita : 0;

    const totalConvertidosMes = leads.filter(
      (l) => l.status === "convertido" && mesMap[l.data.split("-")[1]] === mesNome
    ).length;

    return totalConvertidosMes > 0 ? receitaTotalMes / totalConvertidosMes : 0;
  };

  const ticketMedioGeral = leads.filter(l => l.status === "convertido").length > 0
    ? vendas.reduce((acc, v) => acc + v.receita, 0) / leads.filter(l => l.status === "convertido").length
    : 0;

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
                titulo="Volatilidade"
                valor={14.5}
                icone={<LuArrowUpRight />}
                variacao={2}
              />
              <MetricCard
                titulo="Lucro (7d)"
                valor={lucroSemana}
                icone={<LuBadgeDollarSign />}
                variacao={5}
              />
              <MetricCard
                titulo="Transações"
                valor={leads.length}
                icone={<LuHistory />}
                variacao={12}
              />
              <MetricCard
                titulo="Média Valor"
                valor={Math.round(ticketMedioGeral)}
                icone={<LuCalendarDays />}
                variacao={-3}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-zinc-200 dark:bg-zinc-900 rounded-xl p-4 overflow-x-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Histórico de Movimentações</h3>
              <span className="text-xs bg-zinc-300 dark:bg-zinc-800 px-2 py-1 rounded">
                Janeiro 2024
              </span>
            </div>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-zinc-500 border-b border-zinc-300 dark:border-zinc-800">
                  <th className="pb-3 font-medium">Cliente</th>
                  <th className="pb-3 font-medium">Origem</th>
                  <th className="pb-3 font-medium">Data</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Valor Est.</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-zinc-300 dark:border-zinc-800 last:border-0 hover:bg-zinc-300/50 dark:hover:bg-zinc-800/50 transition-colors"
                  >
                    <td className="py-4 font-medium">{lead.nome}</td>
                    <td className="py-4 text-zinc-500">{lead.origem}</td>
                    <td className="py-4 text-zinc-500">{lead.data}</td>
                    <td className="py-4">
                      <span
                        className={`p-2 px-3 rounded-full text-xs font-semibold inline-block ${
                          lead.status === "convertido"
                            ? "bg-green-100 text-green-700"
                            : lead.status === "em_negociacao"
                              ? "bg-blue-100 text-blue-700"
                              : lead.status === "perdido"
                                ? "bg-red-100 text-red-700"
                                : "bg-zinc-100 text-zinc-700"
                        }`}
                      >
                        {lead.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="py-4 text-right font-bold">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calcularValorLead(lead))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Transacoes;
