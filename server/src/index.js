const express = require("express");
const app = express();
const routes = require("./routes/routes");
const cors = require("cors");

require("./database");

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3001, () => {
  console.log("Server running");
});
