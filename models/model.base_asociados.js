const mongoose = require("mongoose");

const baseAsociadosScheme = new mongoose.Schema(
  {
    Id_Asociado: { type: Number },
    RazonSocial: { type: String },
    RFC: { type: String },
    Region: { type: String },
    Estado: { type: String },
    Ramo: { type: String },
    Nivel: { type: String },
    Tamaño: {
      type: String,
      enum: ["pequenia", "mediana", "grande", "lei", "otras"],
    },
    Estatus_General: { type: String },
    Codigo: { type: String },
    Catalogo: { type: String },
    LEI: { type: String },
    Industria: { type: String },
    Año: { type: Number },
    Mes: { type: String },
    "VC Codigo": { type: Number },
    "VC Catalogo": { type: Number },
    "VC LEI": { type: Number },
    "VC Total": { type: Number },
  },
  { collection: "base_asociados" }
);

const BaseAsociados = mongoose.model("BaseAsociados", baseAsociadosScheme);

module.exports = BaseAsociados;
