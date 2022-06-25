const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('public'));


app.listen(3030, () => {
  console.log("Servidor Corriendo en Puerto 3030");
});



// RUTAS  - - --  -- - - - - - - -- -- - - - - 

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/checkout", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/Carrito-de-compras.html"));
});
