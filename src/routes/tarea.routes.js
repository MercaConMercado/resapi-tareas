import { Router } from 'express'; // con esto se puede definir varias rutas y agruparlas. Mas Orden



import * as tareacontroller from "../controllers/tarea.controller.js"; // exportamos controladorea de las funciones
const router = Router();

/*ROUTS*/

router.get("/:id", tareacontroller.findOneTask);

router.get("/", tareacontroller.gettarea);
// Envio de datos para que se guarden en la base de datos. Toma la ruta /api/tareas la collection TAREAS la crea y adiciona el dato
router.post("/", tareacontroller.posttarea);

router.get("/done", tareacontroller.vertareastodas);



router.delete("/:id", tareacontroller.deletetarea);

router.put("/:id", tareacontroller.updatetarea);



module.exports = router;