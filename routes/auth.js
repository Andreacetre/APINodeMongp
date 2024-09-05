const {Router} = require('express'); //Exportar la funcion router de express para crear un router
const router=Router();//Crea una instancia de Router
const {Login, login}= require('../controllers/auth'); //Importa el controlador login desde el archivo '../controllers/auth'

//Define una ruta POST '/login' que utilizara el controlador login
router.posr('/login', login);
module.exports = router; //Exportar el router disponible para otros modulos 
