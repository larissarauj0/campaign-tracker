import type { Lead, Campanha, Venda } from "../types";

export async function getLeads(): Promise<Lead[]> {
  try {
    const response = await fetch(`http://localhost:3001/leads`);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const data = await response.json();

    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCampanhas(): Promise<Campanha[]> {
  try {
    const response = await fetch(`http://localhost:3001/campanhas`);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const data = await response.json();

    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getVendas(): Promise<Venda[]> {
  try {
    const response = await fetch(`http://localhost:3001/vendas`);
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const data = await response.json();

    return data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
