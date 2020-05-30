const express= require('express');
const bodyParse=require('body-parser');
const cors= require('cors');

//Creación del servidor
const port=process.env.port || 3000;
const app=express()

//Importando los modulos de la bd
const models=require('./config-db');

//Configuración del puerto del servidor
app.listen(port,()=>{
console.log(`Servidor Ejecutandose en el puerto ${port}`)
})

//Formato de las peticiones
app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());

app.use(cors({origin: '*'}));

//Rutas de la API
//Importando los modulos de las rutas
const empleadosAPI=require('./routes/employees')(models);

//Aplicando las rutas a la aplicación
app.use('/api/empleados',empleadosAPI)

app.get('/',(req,res)=>{
    res.send('RUTA RAÍZ DE LA API');
})

app.get('*',(req,res)=>{
    res.status(404).send("<h1>Ruta no existente<\h1>");
 })




