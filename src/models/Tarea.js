// mayuscula sera un modelo que guardare en la base de datos    MODELO DE DATOS QUE SE USARA
import { Schema, model } from 'mongoose'; // importare de mongoose solo las propiedades de chema y modle
import mongoosePaginate from 'mongoose-paginate-v2';

const tareaSchema = new Schema({


    title: {
        type: String,
        require: true,
        trime: true // quita espacios a textos innecesarios

    },
    description: {
        type: String,
        trime: true
    },
    done: {
        type: Boolean,
        default: false,

    }

}, {
    versionKey: false, // evitar que ponga __v
    timestamps: true // para que registre campo de dato createdAt y updatedAT 
});

tareaSchema.plugin(mongoosePaginate);
export default model('Tarea', tareaSchema);
