import type { Lead, Campanha, Venda, LucroHistorico, Metricas, Despesas } from "../types";
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function getLeads(): Promise<Lead[]> {
  try {
    const response = await fetch(`${BASE_URL}/leads`);
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
    const response = await fetch(`${BASE_URL}/campanhas`);
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
    const response = await fetch(`${BASE_URL}/vendas`);
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

export async function getMetricas(): Promise<Metricas[]> {
  try {
    const response = await fetch(`${BASE_URL}/metricas`);
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


export async function getDespesas(): Promise<Despesas[]> {
  try {
    const response = await fetch(`${BASE_URL}/despesas`);
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


export async function getLucroHistorico(): Promise<LucroHistorico[]> {
  try {
    const response = await fetch(`${BASE_URL}/lucroHistorico`);
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

