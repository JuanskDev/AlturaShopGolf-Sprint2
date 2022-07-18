const express = require('express'); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require('path'); //  MODULO PATH

app.use(express.static('public'));  // CSS


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});  

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/footer', (req,res)=>{
    res.sendFile(__dirname + '/views/footer.html');
});
app.get('/header', (req,res)=>{
    res.sendFile(__dirname + '/views/header.html');
});

// MVC SYSTEM
// Users Routes

const rutasUsers = require('./routes/users');
app.use(require('./routes/users'));


//Products Routes

const rutasProductos = require('./routes/products');
app.use(require('./routes/products'))