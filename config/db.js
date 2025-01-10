const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);
    console.log("Conexion exitosa a MongoDB");
  } catch (error) {
    console.log("Ocurrio un error en la conexion con MongoDB ", error);
  }
};

module.exports = connectDb;
