import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';//configuracion para que cualquiera pueda hacer peticiones 
const app = express();
import rutatareas from "./routes/tarea.routes.js";

/*Settings SERVER*/
app.set('App name', 'Api Res A');
app.set('port', process.env.PORT || 5000);
app.set('viwes', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('json space', 2);

/*Middlewares SERVER*/
const permisosacceso = {}; // permisos para acceso, origin: 'http://localhost:5000/'
app.use(cors(permisosacceso));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*Get Routes*/

app.get('/', function (req, res) {
    res.json({ 'mensaje': 'Welcome to My API RES A' });

});

app.use("/api/tareas/", rutatareas)
//pp.use(require('./routes/tarea.routes.js'));

export default app; // importar APP para usar en todo el proyecto