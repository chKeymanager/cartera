const model = require("../models/model.base_asociados");

const valorCarteraXMes = async (mes, anio, filtro = {}) => {
  try {
    const fijo = {
      Mes: mes,
      Año: anio,
    };
    const match = { ...fijo, ...filtro };

    const query = [
      {
        $match: match,
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$VC Total",
          },
        },
      },
    ];

    const resultado = await model.aggregate(query);

    const suma = resultado.length > 0 ? resultado[0].total : 0;
    return suma;
  } catch (error) {
    throw new Error(`Error al obtener los documentos ${error.message}`);
  }
};

const valorCarteraXMembresia = async (mes, anio, membresia, filtro = {}) => {
  try {
    const fijo = {
      Mes: mes,
      Año: anio,
      [membresia]: { $in: ["Activa", "No Activa"] },
    };
    const match = { ...fijo, ...filtro };

    const query = [
      {
        $match: match,
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: `$VC ${membresia}`,
          },
        },
      },
    ];

    const resultado = await model.aggregate(query);
    const suma = resultado.length > 0 ? resultado[0].total : 0;
    return suma;
  } catch (error) {
    throw new Error(`Error al obtener los documentos ${error.message}`);
  }
};

module.exports = {
  valorCarteraXMes,
  valorCarteraXMembresia,
};
