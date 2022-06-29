const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.listen(3030, () => {
  console.log("Servidor Corriendo en Puerto 3030");
});

// RUTAS  - - --  -- - - - - - - -- -- - - - -

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/checkout", (req, res) => {
  res.sendFile(path.resolve("./Views/Carrito-de-compras.html"));
});

app.get("/ingreso"),
  (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/InicioSesion.html"));
  };

app.get("/producto"),
  (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/DetalleProducto.html"));
  };

app.get("/registro"),
  (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/Registro.html"));
  };
