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

  filtros: () => {
    const campos = [
      "Tamaño",
      "Industria",
      "Region",
      "Catalogo",
      "Codigo",
      "LEI",
    ];
    const filtro = {};

    campos.forEach((campo) => {
      const valor = $(`#${campo.slice(0, 3).toLowerCase()}`).val();
      if (valor?.length) {
        filtro[campo] = Herramientas.obtieneValorSelect(valor);
      }
    });

    return {
      mes: "Noviembre",
      anio: 2024,
      filtro: filtro,
    };
  },
};
