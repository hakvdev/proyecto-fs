const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB!"))
  .catch((error) => console.log("Se ha producido un error", error));

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Hola MongoDB!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
