const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "projeto_memoria",
  define: {
    timestamps: true,
    underscored: true,
  },
};
