import {
  getLeads,
  getCampanhas,
  getVendas,
  getMetricas,
  getDespesas,
  getLucroHistorico,
} from "../services/api";

globalThis.fetch = vi.fn()

describe("API services", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("getLeads retorna array de leads", async () => {
    const mockLeads = [
      {
        id: "1",
        nome: "Ana",
        origem: "Google",
        status: "novo",
        data: "2024-01-01",
      },
    ];

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockLeads,
    });

    const result = await getLeads();
    expect(result).toEqual(mockLeads);
  });

  test("getLeads retorna array vazio quando API falha", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
    });

    const result = await getLeads();
    expect(result).toEqual([]);
  });

  test("getCampanhas retorna array de campanhas", async () => {
    const mockCampanhas = [
      {
        id: "1",
        nome: "Google Ads",
        canal: "Google",
        orcamento: 5000,
        gasto: 4000,
        leads: 40,
        conversoes: 10,
      },
    ];

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCampanhas,
    });

    const result = await getCampanhas();
    expect(result).toEqual(mockCampanhas);
  });

  test("getVendas retorna array de vendas", async () => {
    const mockVendas = [
      {
        id: "1",
        mes: "Jan",
        receita: 32000,
        meta: 30000,
        custos: 18000,
        lucro: 14000,
      },
    ];

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockVendas,
    });

    const result = await getVendas();
    expect(result).toEqual(mockVendas);
  });

  test("getMetricas retorna array de metricas", async () => {
    const mockMetricas = [
      {
        id: "1",
        faturamento: 45000,
        receitaBruta: 45000,
        lucroLiquido: 17550,
        margemLucro: 39,
        custos: 20400,
        custosDescricao: "Produtos",
        taxas: 2667,
        taxasDescricao: "Gateway",
      },
    ];

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockMetricas,
    });

    const result = await getMetricas();
    expect(result).toEqual(mockMetricas);
  });

  test("getDespesas retorna array de despesas", async () => {
    const mockDespesas = [{ id: "1", categoria: "Anúncios", valor: 8400 }];

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockDespesas,
    });

    const result = await getDespesas();
    expect(result).toEqual(mockDespesas);
  });

  test("getLucroHistorico retorna array de historico", async () => {
    const mockHistorico = [{ id: "1", semana: "Seg", lucro: 2800 }];

    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => mockHistorico,
    });

    const result = await getLucroHistorico();
    expect(result).toEqual(mockHistorico);
  });
});
