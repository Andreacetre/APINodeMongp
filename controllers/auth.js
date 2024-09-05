const usuario = require('../modules/usuario')
//Importa la libreria bcryots para cifrado y comparación
// de contraseña
const bcrypt = require('bcrypts')

//Funcion asincromatica para comparar la contraseña proporcionada con el hash almacenado
async function comparePassword(plaintexPassword, hash){
    const result=await bcrypt.compare(plaintexPassword, hash);
    return result;

}
// Función de inicio de sesión 
const login=async(req, res)=>{
    const {email,password}=req.body //Extrae el email y la contraseña
    // del cuerpo de la solicitud
    //Busca un usuario en la base de datos que coincida con el email proporcionado
    const usuario = await Usuario.findOne({email})
    try{
        //verifica que el usuario exista en la base de datos 
        if(!usuario){
            return res.status(400).json({
                msg: 'Correo electronico no encontrado'
            })
        }
        if(!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario inactivo'
            })
        }
        //Comparar la contraseña proporcioanda con la almacenada en la base de datos 
        resultado = await comparePassword(password,usuario.password)
        if(resultado==true){
            return res.status(400).json({
            msg: 'El password es correcto'
            })
        }
        else{
            return res.status(400).json({
                msg:'El password es incorrecto'
            })
        }

    }
    catch(err){
        return res.status(400).json({

            msg: 'Apreciado usuario contacte al administrador'
            //Mensaje de error generico en caso de fallo
        })
    }
}
// Exporta la función de inicio de sesión para que este disponible para otros modulos
module.exports={
    login
}

