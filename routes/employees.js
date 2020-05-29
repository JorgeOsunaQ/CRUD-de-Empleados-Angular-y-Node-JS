const router=require('express').Router()

module.exports=(models)=>{

    //Consultar todos los empleados
    router.get('/', async (req,res)=>{
        const usuariosQuery= await models.employeeModel.findAll().then({
            attributes: ['id','name', 'last_name','job_title']

        }).catch(error=>{
            return res.status(400).json({
                flag: false,
                data: null,
                message: "Imposible Obtener Datos de la BD.",
                error: error})
        })

        res.send(usuariosQuery)
    })

    //Consultar empleados por ID
    router.get('/:id', async (req,res)=>{
        const id=req.params.id;
        const usuarioQuery= await models.employeeModel.findByPk(id).then({
            attributes: ['id','name', 'last_name','job_title']
        });

        if(usuarioQuery!=null)
            res.send(usuarioQuery)
        else
        res.status(400).json({
            flag: false,
            data: null,
            message: "Ningun registro coincide con las busqueda."})
    })

    //Registrar nuevos empleados
    router.post("/registrar",async(req,res)=>{
        const employee=req.body;

        try{
        await models.employeeModel.create(employee);
        }catch(error){
            console.log(error)
            return res.status(400).json({
                flag: false,
                data: null,
                message: "No fue posible crear este usuario.",
                error: error})
        }
        res.send({
            message: "Empleado agregado exitosamente."
        })
    })

    //Modificar empleado
    router.put('/modificar', async (req,res)=>{
        const id=req.body.id;

        const newData={
            name: req.body.name,
            last_name: req.body.last_name,
            job_title: req.body.job_title
        }

        try{
            models.employeeModel.update(
                newData,
                { where: { id: id }}
            )
        }catch(error){
            return res.status(400).json({
                flag: false,
                data: null,
                message: "No fue posible modificar los datos del usuario.",
                error: error})
        }

        res.send({
            message: "Datos del empleado modificados exitosamente."
        })
    })

    //Eliminar empleado
    router.delete("/eliminar",async(req,res)=>{
        const id=req.body.id;

        try{
            models.employeeModel.destroy({
                where:{id: id}
            })
        }catch(error){
            return res.status(400).json({
                flag: false,
                data: null,
                message: "No fue posible eliminar a este usuario.",
                error: error})
        }

        res.send({
            message: "Empleado eliminado exitosamente.",
        })
    })

    return router;
}