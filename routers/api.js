const express = require("express");
const router = express.Router();
const {
  obtieneValorCartera,
  obtieneValorCarteraMembresia,
} = require("../controllers/cartera");

router.post("/valor-cartera", obtieneValorCartera);
router.post("/valor-cartera-membresia", obtieneValorCarteraMembresia);

module.exports = router;
