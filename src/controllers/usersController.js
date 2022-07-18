const path = require('path');

const usersController = {
    registro: (req , res) => {
        res.sendFile(path.join(__dirname , '../Views/Registro.html'))
    },
    login: (req,res)  => {
        res.sendFile(path.join(__dirname, '../views/iniciosesion.html'))
    }
};

module.exports = usersController;