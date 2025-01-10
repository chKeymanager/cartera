const {
  valorCarteraXMes,
  valorCarteraXMembresia,
} = require("../services/service.base_asociados");

const obtieneValorCartera = async (req, res) => {
  const { mes, anio, filtro } = req.body;

  try {
    const resultado = await valorCarteraXMes(mes, anio, filtro);
    return res.status(200).json({ status: true, data: resultado });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

const obtieneValorCarteraMembresia = async (req, res) => {
  const { mes, anio, membresia, filtro } = req.body;

  try {
    const resultado = await valorCarteraXMembresia(
      mes,
      anio,
      membresia,
      filtro
    );
    return res.status(200).json({ status: true, data: resultado });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = {
  obtieneValorCartera,
  obtieneValorCarteraMembresia,
};
