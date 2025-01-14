const Herramientas = {
  formatoMXN: (numero) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(numero);
  },

  esArreglo: (valor) => {
    return valor.length > 1 ? valor : valor[0];
  },

  obtieneValorSelect: (valor) => {
    const filtro = Herramientas.esArreglo(valor);
    return Array.isArray(filtro) ? { $in: filtro } : filtro;
  },

  generaFiltros: (campos, idSufijo = "") => {
    const filtro = {};

    campos.forEach((campo) => {
      const valor = $(`#${campo.slice(0, 3).toLowerCase()}${idSufijo}`).val();
      if (valor?.length) {
        filtro[campo] = Herramientas.obtieneValorSelect(valor);
      }
    });
    return filtro;
  },

  filtros: () => {
    return {
      mes: "Noviembre",
      anio: 2024,
      filtro: Herramientas.generaFiltros([
        "Tamaño",
        "Industria",
        "Region",
        "Catalogo",
        "Codigo",
        "LEI",
      ]),
    };
  },

  filtrosMembresias: () => {
    return {
      mes: "Noviembre",
      anio: 2024,
      filtro: Herramientas.generaFiltros(
        ["Tamaño", "Industria", "Region"],
        "1"
      ),
    };
  },
};
