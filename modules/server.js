//Importar la libreria express para creasr el servirdor web 
const express=require('express');

//Importar la funcion de conexion a la base de datos
const {dbConnection}=require('../database/config');
//Importar la libreria CORS  para permitir las peticiones desde otros dominios 
const cors=require('cors');
//Importar la libreria body-parser para guardar datos edel cuerpo de las peticiones HTTP
const bodyParser=require('body-parser');

class Server{
    constructor(){
        this.app=express();//Inicializa la aplicación express
        this.port=process.env.PORT;//Obtiene el puerto de conexión de las variables de entorno 
        this.usuariosPaht='api/usuarios'//Define la ruta base paera las operaciones
        //mrelacionadas con los usuarios
        this.authPath='api/auth'////Define la ruta base paera las operaciones
        // de autentificacion
        this.middlewares();//cdonfigura los middlewares de las aplicación
        this.ConnectionDb();//Iniciamos la conexion de la base de datos conectada con la base de datos mongoDB
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando por el puerto ${this.port}`);

        });

    }
    middlewares(){
        //Configura los CORS para permitir peticiones desde otros dominios 
        this.app.use(cors());
        // configurar el body-parser para preparar los datos  del cuerpo de las peticiones HTTP
        this.app.use(bodyParser.json());//para parsear application/json configurar express.static para servir archivos estaticos 
        this.app.use(express.static(__dirname+"/public"));
    }
    routes(){
        //configurar las rutas de la aplicacion
        this.app.use(this.usuariosPaht, require('../routes/usuarios'))
    }
    async ConnectionDb(){
        //conecta con la base de datos de ddatos mongoDB al inicio del servidor
        await dbConnection();

    }
}
// experto la clase Server para qie este dispoble para otros modulos
module.exports=Server;