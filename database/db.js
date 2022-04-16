//Imprtando
const mongoose = require("mongoose");

const connectToDb = () => {
  //console.log('Banco de Dados')// para teste
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb Atlas Conectado"))
    .catch((err) => console.error(err));
};

// exportando para ser usado onde precisar

module.exports = connectToDb;
