const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/carrito-de-compras', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito-de-compras.html');
});
app.get('/detalleproducto', (req,res)=>{
    res.sendFile(__dirname + '/views/detalleproducto.html');
});
app.get('/footer', (req,res)=>{
    res.sendFile(__dirname + '/views/footer.html');
});
app.get('/header', (req,res)=>{
    res.sendFile(__dirname + '/views/header.html');
});
app.get('/iniciosecion', (req,res)=>{
    res.sendFile(__dirname + '/views/iniciosecion.html');
});
app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});