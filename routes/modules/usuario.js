const {schema, model} = require('mongoose'); //Importar las funciones schema y model de mongoose para definir esquemas y modelos de datos

//Define el esquema del modelo Usuario
const UsuarioSchema=Schema({
    nombre:{
     type:String,
     required:[true, 'El nombre es obligatorio']//define que el campo es obligatorio
    },

email:{
    type:String,
    required:[true, 'El  Email es obligatorio']//define que el campo es obligatorio
   },

   password:{
    type:String,
    required:[true, 'El Password es obligatorio'],//define que el campo es obligatorio
    minlength:3,//Define la longitud minima del campo para 
    maxlength:[60, 'El password debe tener una longitud maxima de  60 carácter']
   },
   rol:{
    type:String,
    required:true, //define que el campo es obligatorio
    enum:['Admin', 'Usuario']//Define que el campo rol solo puede tener los valores 'Admin' o 'Usuario'
   },
estado:{
    type:Boolean,
    default:true,
    required:[true, 'El estado es obligatorio']//Define  que el campo este obligado
},
});

//Crea y exporta el modelo de usuario  para que 
module.exports=model('Usuario','UsuarioSchema')