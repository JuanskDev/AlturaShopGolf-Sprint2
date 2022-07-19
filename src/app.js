const express = require('express'); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require('path'); //  MODULO PATH

app.use(express.static('./Public'));  // CSS

console.log(__dirname)


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
});  

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.ejs');
});

app.get('/footer', (req,res)=>{
    res.sendFile(__dirname + '/views/footer.html');
});
app.get('/header', (req,res)=>{
    res.sendFile(__dirname + '/views/header.html');
});

// MVC SYSTEM
// Users Routes

const rutasUsers = require('../src/routes/users');
app.use(require('../src/routes/users'));


//Products Routes

const rutasProductos = require('./routes/products');
app.use(require('../src/routes/products')) 