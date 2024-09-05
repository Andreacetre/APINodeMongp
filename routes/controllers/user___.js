//Importando una función que se llama response desde el modulo express
const {response} = require('express')
// Controlador para la solicitud GET a la ruta de usuario
usuarioGet=(req, res=response)=>{
    res.json({
        msg: "GET API"//Devolver el objeto JSON  con un mensaje indicando que se esta accediendo 
        //ala API con el GET
    })
}
// Controlador para la solicitudes POST a la ruta de usuarios
usuarioPost=(req, res=response)=>{
    res.json({
        msg: "POST API"//Devolver el objeto JSON  con un mensaje indicando que se esta accediendo 
        //ala API con el POST
    })
}
// Controlador para la solicitudes PUT a la ruta de usuarios
usuarioPut=(req, res=response)=>{
    res.json({
        msg: "PUT API"//Devolver el objeto JSON  con un mensaje indicando que se esta accediendo 
        //ala API con el PUT
    })
}
usuaraDelete=(req, res=response)=>{
    res.json({
        msg: "DELETE API"//Devolver el objeto JSON  con un mensaje indicando que se esta accediendo 
        //ala API con el DELETE
    })
}
module.exports={
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuaraDelete
}