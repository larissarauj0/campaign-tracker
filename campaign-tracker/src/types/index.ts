
export type Lead = {
  id: number;
  nome: string;
  origem: string;
  status: string;
  data: string;
};
export type Campanha = {
  id: number;
  nome: string;
  canal: string;
  orcamento: number;
  gasto: number;
  leads: number;
  conversoes: number;
};
export type Venda = {
  id: number;
  mes: string;
  receita: number;
  meta: number;
  custos: number;
  lucro: number;
};
export type Metricas ={
   id: number;
   faturamento: number;
   receitaBruta: number;
   lucroLiquido: number;
   margemLucro: number;
   custos: number;
   custosDescricao: string;
   taxas: number;
   taxasDescricao: string;
};
export type Despesas = {
   id: number;
   categoria: string;
   valor: number;
};
export type LucroHistorico ={
   id: number;
   semana: string;
   lucro: number;
};



