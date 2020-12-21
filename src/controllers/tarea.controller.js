import Tarea from '../models/Tarea.js';
import { getPagination } from '../libs/getpagination.js'


/*CONSULTA*/
export const gettarea = async function (req, res) {
    try {
        const { size, page, title } = req.query

        const condition = title ? {
            title: {$regex: new RegExp(title), $options: 'i'}, // consulta recursiva en la base de datos
        }: {};

        const { limit, offset } = getPagination(page, size);
        const data = await Tarea.paginate(condition, { offset, limit }); // llama al Modelo TAREA creado en TAREA.js consulta la base de datos y muestra la informacion.

        res.json({
            TotalBusqueda: data.totalDocs,
            Doc: data.docs,
            CantidadPaginas: data.totalPages,
            PaginaActual: data.page - 1
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.message || 'error consultanto tareas'
        });

    }

};


/*CUNSULTA POR ID*/
export const findOneTask = async function (req, res) {
    const { id } = req.params;
    try {

        //console.log(req.params.id);
        const buscartarea = await Tarea.findById(id);

        if (!buscartarea) return res.status(404).json({ mensaje: `la tarea ${id} no se encuentra`, });
        res.json(buscartarea);
    } catch (error) {
        res.status(500).json({
            mensaje: error.message || `error consultando por id de tarea ${id} `,
        });

    }


};

/*CONSULTA POR VARIABLES*/
export const vertareastodas = async function (req, res) {
    try {
        const vertareas = await Tarea.find({ done: true }); // llama al Modelo TAREA creado en TAREA.js consulta la base de datos y muestra la informacion.
        res.json(vertareas)
    } catch (error) {
        res.status(500).json({
            mensaje: error.message || 'error consultando por variable de tarea'
        });
    }
};

/*GUARDAR y Enviar*/
export const posttarea = async function (req, res) {

    if (!req.body.title) {
        return res.status(400).send({ mensjae: 'Tienes Campos Vacios' })
    }
    try {
        //console.log(req.body);
        const newTarea = new Tarea({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        }); // esto crea un objeto
        const tareaGuardada = await newTarea.save(); // esto guarda el objeto en la base de datos
        //console.log(newTarea);
        res.json(tareaGuardada);
    } catch (error) {

    }

};






/*BORRAR POR ID*/
export const deletetarea = async function (req, res) {
    const { id } = req.params;
    try {
        await Tarea.findByIdAndDelete(id)
        res.json({
            mensaje: 'tarea eliminada'
        });
    } catch (error) {
        res.status(500).json({
            mensaje: error.message || `error borrando tarea ${id}`,
        });

    }
};


/*ACTUALIZAR*/

export const updatetarea = async function (req, res) {
    try {
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.json({ mensaje: 'tarea actualizada' });
    } catch (error) {
        res.status(500).json({
            mensaje: error.message || 'error actualizando tarea'
        });

    }
};


