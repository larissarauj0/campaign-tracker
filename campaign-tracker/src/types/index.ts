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
  orçamento: number;
  gasto: number;
  leads: number;
  conversoes: number;
};
export type Venda = {
  id: number;
  mes: string;
  receita: number;
  meta: number;
};
