const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        // Intenta conectar con la base de datos utilizando la URL de la variable de entorno
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
        throw new Error('Error de conexión a la base de datos');
    }
};

module.exports = {
    dbConnection
};


