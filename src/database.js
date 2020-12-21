import mongoose from 'mongoose';
import config from './config';

(async function () {
    try {
        const db = await mongoose.connect(config.mongodbURL, { // parametros de conexion base de datos 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false

        });
        console.log('Database connected to: ', db.connection.name);
    } catch (error) {
        console.error(error);

    }
})();

