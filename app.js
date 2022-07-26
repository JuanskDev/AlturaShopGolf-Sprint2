const express = require('express'); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require('path'); //  MODULO PATH

app.use(express.static('./Public'));  // CSS

console.log(__dirname)


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
}); 

app.get('/productos/palos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/palos.ejs'))
})

app.get('/productos/zapatos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/zapatos.ejs'))
})

app.get('/productos/bolsas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/bolsas.ejs'))
})

// MVC SYSTEM

// Main Routes

const rutasMain = require('./src/routes/main')
app.use(require('./src/routes/main'))

// Users Routes

const rutasUsers = require('./src/routes/users');
app.use(require('./src/routes/users'));


//Products Routes

const rutasProductos = require('./src/routes/products');
app.use(require('./src/routes/products')) 

