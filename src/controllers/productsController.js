const path = require('path');

const productsController = {
    carritoCompra: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/carrito-de-compras.html'))
    },
    detalleProducto: (req,res) => {
        res.sendFile(path.join(__dirname, '../views/detalleproducto.html'))
    }
};

module.exports = productsController;
