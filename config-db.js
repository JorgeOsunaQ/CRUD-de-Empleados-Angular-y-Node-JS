const Sequelize=require('sequelize')

const sequelize=new Sequelize({
    dialect: 'sqlite',
    storage: 'databaseEmpleados.sqlite'
});

sequelize
.authenticate()
.then(() => {
console.log('Conexión establecida correctamente.');
})
.catch(err => {
console.error('No se pudó conectar con la base de datos:', err);
});

const employeeModel=require('./models/employees_model')(sequelize)
sequelize.sync()

module.exports={
    employeeModel
}