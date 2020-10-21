const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

const { DB } = require("./config/DB");

// Ruta del tikect
const tikectRoutes = require("./routes/tikect");
const redirectRoutes = require("./routes/redirect");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(DB, { useMongoClient: true })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

// configuración del puerto del servidor
app.set("port", process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use("/tikect", tikectRoutes);
app.use("/redirect", redirectRoutes);

// ruta para los archivos staticos
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
