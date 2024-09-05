//Importando una función que se llama response desde el modulo express
const {response} = require('express')

//Importa la libreria bcryots para cifrado y comparación
// de contraseña
const bcrypt = require('bcrypts')

// Importar modelos
//Importar el modelo de usuario desde el modulo '../modules/usuario
const usuario = require('../modules/usuario')

//Controlador para la solicitud GET a la ruta de usuarios
const usuarioGet=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    const{q,nombre, page=1, limit}=req.query;
    //Consulta todos los documentos de la coleccion Usuarios
    const usuarios=await Usuario.find();
    resp.json({
        //Devuelve un objeto JSON con los usuarios  obtenidos de la base de datos
        usuarios
    });
}

//Controlador para la solictud GET de promedio de los Usuarios 
const PromGet=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    const{q,nombre, page=1, limit}=req.query;
    //Consulta todos los documentos de la coleccion Usuarios
    const usuarios=await Usuario.find();
    //Muestra cada documento de usuarioo por consola 
    usuarios.forEach(numero => console.log (numero));

    resp.json({
        //Devuelve un mensaje indicando que es el controlador del promedio
        msg: 'Prom API Contorlador',
        q,
        nombre,
        page,
        limit,
        //Devuelve los usuarios obtenidos de la base de datos
        usuarios
    });
}
//Contolarodor para la solicitud POST a la ruta de usuario
const usuarioPost=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros de la consulta
    let msg='';//Inicializamos una variable para el mensaje de respuesta

    //Creamos un nuevo objeto usuario
    //Cuerpo de la solcitud 
    const usuario=new Usuario(body);

    //Extrsaer los datos del cuerpo de la solicitud 
    const{nombre,email,password,rol,estado}=req.body;
    try{
        //Encripta la contraseña antes de guardarla en la base de datos
        const salt=bcrypt.genSaltSync(10);//Genera una cadena de cifrado
        usuario.password=bcrypt.hashSync(password, salt);//Cifra la contraseña con la cadena (salt)genera

         // Guarda el usuario en la base de datos 
        await usuario.save()

        //Asignar un mensaje de exito
        msg='Usuario registrado';
    }
    catch(error){
        console.log(error);//Muestra el error por consola
        if(error){
            if(error.name=='ValidacionError'){
                console.error(Objeto.values(error.errors).map(val=>
                    val.message));
                    //Muestra los mensajes de validacion 
                    msg=Object.values(error.errors).map(val=>
                        val.message);
                        //Asigna el mensaje de error a los errores de respuesta 
            }
        }
    }
    console.log(msg); // Muestrame el mensaje de respuesta por consola 
    resp.json({
        //Devuelve el mensaje de respuesta como un objeto JSON
        msg:msg
     
    });
}

//Contolarodor para la solicitud PuT a la ruta de usuario
const usuarioPut=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros 
    //Muestra los parametros de consulta por consola 
    console.log(body);
     //Extrsaer los datos del cuerpo de la solicitud 
     const{nombre,email,password,rol,estado}=req.body;
     
     //Buscar y actualizar un usuario en la base de datos 
     const usuario=await Usuario.findOneAndUpdate({email:email},{nombre:nombre},{rol:rol});

     resp.json({
        //Devuelve un mensaje indicando que se actualizo el usuario 
        msg:'Usuario modificado',
        //Devuelve el usuario modificando
        usuario
     });

}
//Contolarodor para la solicitud DELETE a la ruta de usuario
const usuarioDelete=async (req, resp=response)=>{
    const body=req.query;//Extrae los parametros 

 //Muestra los parametros de consulta por consola 
 console.log(body);
 //Extrsaer los datos del cuerpo de la solicitud 
 const{nombre,email,password,rol,estado}=req.body;
  //Buscar y actualizar un usuario en la base de datos 
  const usuario=await Usuario.findOneAndDelete({email:email});

  
  resp.json({
    //Devuelve un mensaje indicando que se elimino el usuario 
    msg:'Usuario eliminado',
    //Devuelve el usuario eliminado
    usuario
 });

}

// Exporto los controladores de las rutas de usuarios para que esten disponibles para otros modulos
module.exports={
    usuarioGet,
    PromGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete 
    
}