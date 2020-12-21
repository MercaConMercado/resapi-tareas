import { config } from 'dotenv';
config();

export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tareasapi', //ADICIONAL EL MODULO DOTENV hace que se pueda traer la conexion a la base de datos por una variable de entorno definida en el el archivo .env donde se deja la ruta. CARGA LAS VARIABLES DE ENTORNO
};