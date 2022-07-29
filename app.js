const express = require('express'); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require('path'); //  MODULO PATH
// const multer = require('multer'); //MODULO PARA SUBIR ARCHIVOS - MULTER
app.use(express.static('./Public'));  // CSS

console.log(__dirname)


app.listen(3030, ()=>{
    console.log('Servidor funcionando');
}); 
//---------------------ACCESORIOS-TODO-------------------------------//
app.get('/productos/accesorios' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/accesorios.ejs'))
})
//---------------------GUANTES-------------------------------//
app.get('/productos/accesorios/guantes' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/guantes.ejs'))
})
//---------------------GORRAS-------------------------------//
app.get('/productos/accesorios/gorras' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/gorras.ejs'))
})
//---------------------FUNDAS-------------------------------//
app.get('/productos/accesorios/fundas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/fundas.ejs'))
})
//---------------------HERRAMIENTAS-------------------------------//
app.get('/productos/accesorios/herramientas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/herramientas.ejs'))
})
//---------------------TOALLAS-------------------------------//
app.get('/productos/accesorios/toallas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/toallas.ejs'))
})
//---------------------TEES-------------------------------//
app.get('/productos/accesorios/tees' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/tees.ejs'))
})
//---------------------PARAGUAS-------------------------------//
app.get('/productos/accesorios/paraguas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/paraguas.ejs'))
})
//---------------------TECNOLOGIA-TODO-------------------------------//
app.get('/productos/tecnologia' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/tecnologia.ejs'))
})
//---------------------GPS-------------------------------//
app.get('/productos/tecnologia/gps' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/gps.ejs'))
})
//---------------------SIMULADORES-------------------------------//
app.get('/productos/tecnologia/simuladores' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/simuladores.ejs'))
})
//---------------------TELEMETROS-------------------------------//
app.get('/productos/tecnologia/telemetros' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/telemetros.ejs'))
})
//---------------------PALOS-TODO-------------------------------//
app.get('/productos/palos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/palos.ejs'))
})
//---------------------DRIVE-------------------------------//
app.get('/productos/palos/drive' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/drive.ejs'))
})
//---------------------MADERAS-------------------------------//
app.get('/productos/maderas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/maderas.ejs'))
})
//---------------------HIBRIDOS-------------------------------//
app.get('/productos/palos/hibridos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/hibridos.ejs'))
})
//---------------------HIERROS-------------------------------//
app.get('/productos/palos/hierros' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/hierros.ejs'))
})
//---------------------WEDGES-------------------------------//
app.get('/productos/palos/wedges' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/wedges.ejs'))
})
//---------------------PUTTERS-------------------------------//
app.get('/productos/palos/putters' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/putters.ejs'))
})
//---------------------ZAPAOS-------------------------------//
app.get('/productos/zapatos' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/zapatos.ejs'))
})
//---------------------BOLSAS&CARROS-------------------------------//
app.get('/productos/bolsas-carros' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/bolsas-carros.ejs'))
})
//---------------------BOLSAS-------------------------------//
app.get('/productos/bolsas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/bolsas.ejs'))
})
//---------------------CARROS-------------------------------//
app.get('/productos/carros' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/carros.ejs'))
})
//---------------------PELOTAS-------------------------------//
app.get('/productos/pelotas' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/pelotas.ejs'))
})
//---------------------VESTIR-------------------------------//
app.get('/productos/vestir' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/vestir.ejs'))
})
//---------------------ROPA DE HOMBRES-------------------------------//
app.get('/productos/vestir/ropa-de-hombres' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/ropa-de-hombres.ejs'))
})
//---------------------ROPA DE MUJER-------------------------------//
app.get('/productos/ropa-de-mujer' , (req , res) => {
    res.render(path.join(__dirname , 'src/views/ropa-de-mujer.ejs'))
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

//multer settings
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null,'./public/img/upload');
//     },
//     filename:function(req, file, cb){
//         cb(null, file.filedname + '-' + Date.now());
//     }
// })

// const uploadFile = multer({ storage: storage });

// app.post('/uploadfile', uploadFile.single('myFile'), (req, res) =>{
//     console.log(req.file)
//     //res.send('Archivo subido correctamente')
// })