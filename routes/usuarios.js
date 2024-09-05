const {Router} = require('express'); //Exportar la funcion router de express para crear un router
const router=Router();//Crea una instancia de Router

const {usuarioGet, usuarioPost, usuarioPut,usuarioDelete, PromGet}= require('../controllers/usuario');//Importamos
//los controladores desde el archivo '../controllers/usuario'

//Define rutas y asigna controladores a cada ruta 
//Ruta para obtener todos los usuarios (Get '/')
router.get('/', usuarioGet);

//Ruta para obtener todos los usuarios (Get '/promedio')
router.get('/promedio', PromGet);

//Ruta para crear un nuevo usuario (Post '/')
router.post('/', usuarioPost);

//Ruta para actualizar un usuario existente (Put '/')
router.put('/', usuarioPut);

//Ruta para eliminar  todos los usuarios existentes(Delete '/')
router.delete('/', usuarioDelete);

//exporta el router para que este disponible para otros modulos
module.exports = router;