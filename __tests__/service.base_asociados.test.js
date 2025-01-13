const {
  valorCarteraXMes,
  valorCarteraXMembresia,
} = require("../services/service.base_asociados");
const model = require("../models/model.base_asociados");

jest.mock("../models/model.base_asociados.js");

describe("valorCarteraXMes", () => {
  it("Debería devolver la suma correcta cuando hay documentos", async () => {
    model.aggregate.mockResolvedValue([{ total: 100000 }]);

    const resultado = await valorCarteraXMes("Noviembre", 2024);
    expect(resultado).toBe(100000);
  });

  it("Debería devolver 0 cuando no hay documentos", async () => {
    model.aggregate.mockResolvedValue([]);

    const resultado = await valorCarteraXMes("Diciembre", 2024);
    expect(resultado).toBe(0);
  });

  it("Debería devolver la suma con los datos filtrados por Tamaño: pequenia y Region: CENTRO", async () => {
    model.aggregate.mockResolvedValue([{ total: 23423 }]);

    const resultado = await valorCarteraXMes("Noviembre", 2024, {
      Tamaño: "pequenia",
      Region: "CENTRO",
    });
    expect(resultado).toBe(23423);
  });

  it("Debería lanzar un error si ocurre un problema con el modelo", async () => {
    model.aggregate.mockRejectedValue(new Error("Error de base de datos"));

    await expect(valorCarteraXMes("Enero", 2025)).rejects.toThrow(
      "Error al obtener los documentos Error de base de datos"
    );
  });
});

describe("valorCarteraXMembresia", () => {
  it("Deberia devolver la suma correcta de Codigo", async () => {
    model.aggregate.mockResolvedValue([{ total: 80000 }]);

    const resultado = await valorCarteraXMembresia("Noviembre", 2024, "Codigo");
    expect(resultado).toBe(80000);
  });

  it("Deberia devolver 0 cuando no hay documentos para Catalogo", async () => {
    model.aggregate.mockResolvedValue([]);

    const resultado = await valorCarteraXMembresia(
      "Noviembre",
      2024,
      "Catalogo"
    );
    expect(resultado).toBe(0);
  });

  it("Debería devolver la suma de Catalogo con los datos filtrados por Industria: Fabricante y Region: BAJÍO", async () => {
    model.aggregate.mockResolvedValue([{ total: 4593 }]);

    const resultado = await valorCarteraXMembresia(
      "Noviembre",
      2024,
      "Catalogo",
      {
        Industria: "Fabricante",
        Region: "BAJÍO",
      }
    );
    expect(resultado).toBe(4593);
  });

  it("Debería lanzar un error si ocurre un problema con el modelo", async () => {
    model.aggregate.mockRejectedValue(new Error("Error de base de datos"));

    await expect(
      valorCarteraXMembresia("Enero", 2025, "Otros")
    ).rejects.toThrow("Error al obtener los documentos Error de base de datos");
  });
});
