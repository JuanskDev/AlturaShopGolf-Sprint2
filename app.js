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
app.get('/iniciosesion', (req,res)=>{
<<<<<<< HEAD
    res.sendFile(__dirname + '/views/iniciosesion.html');
=======
    res.sendFile(__dirname + '/views/inicioSesion.html');
>>>>>>> 495e4d81a42e0b630a8d6e0cbe5837474aa65749
});
app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/registro.html');
});