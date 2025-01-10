const connectDb = require("./config/db");
const app = require("./app.js");
const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () =>
  console.log(`Aplicación corriendo en el puerto ${PORT}`)
);
