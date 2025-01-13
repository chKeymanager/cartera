const request = require("supertest");
const app = require("../app.js");

jest.mock("../services/service.base_asociados", () => ({
  valorCarteraXMes: jest.fn(),
  valorCarteraXMembresia: jest.fn(),
}));

const {
  valorCarteraXMes,
  valorCarteraXMembresia,
} = require("../services/service.base_asociados");

describe("Test de la API", () => {
  it("Debería de devolver el valor de cartera para Noviembre del 2024", async () => {
    valorCarteraXMes.mockResolvedValue(1000);

    const mes = "Noviembre";
    const anio = 2024;
    const filtro = {};

    const response = await request(app)
      .post("/api/valor-cartera")
      .send({ mes, anio, filtro });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: true, data: 1000 });
    expect(valorCarteraXMes).toHaveBeenCalledWith(mes, anio, filtro);
  });

  it("Debería de devolver el valor de cartera para Noviembre de 2024 y que sean de industria Salud", async () => {
    valorCarteraXMes.mockResolvedValue(234);

    const mes = "Noviembre";
    const anio = 2024;
    const filtro = { Industria: "Salud" };

    const response = await request(app)
      .post("/api/valor-cartera")
      .send({ mes, anio, filtro });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: true, data: 234 });
    expect(valorCarteraXMes).toHaveBeenCalledWith(mes, anio, filtro);
  });

  it("Debería de devolver el valor de cartera para Catalogo de noviembre de 2024", async () => {
    valorCarteraXMembresia.mockResolvedValue(1000);

    const mes = "Noviembre";
    const anio = 2024;
    const membresia = "Catalogo";
    const filtro = {};

    const response = await request(app)
      .post("/api/valor-cartera-membresia")
      .send({ mes, anio, membresia, filtro });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: true, data: 1000 });
    expect(valorCarteraXMembresia).toHaveBeenCalledWith(
      mes,
      anio,
      membresia,
      filtro
    );
  });

  it("Debería de devolver el valor de cartera para LEI de noviembre de 2024 que sean de industria Salud", async () => {
    valorCarteraXMembresia.mockResolvedValue(0);

    const mes = "Diciembre";
    const anio = 2024;
    const membresia = "LEI";
    const filtro = {
      Industria: "Salud",
    };

    const response = await request(app)
      .post("/api/valor-cartera-membresia")
      .send({ mes, anio, membresia, filtro });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: true, data: 0 });
    expect(valorCarteraXMembresia).toHaveBeenCalledWith(
      mes,
      anio,
      membresia,
      filtro
    );
  });
});
