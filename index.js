require('dotenv').config();//Importarmos y cargamos las variables de entorno
//desde el archivo .env 
const Server=require('./modules/server'); //Estamos importando clase Server desde './modules/server'

const server=new Server(); //Crea una nueva instanciode la clase Sever
server.listen();// Inicia el servidor llamando el metodo listen() de la instancia creada server
