const Sequelize=require("sequelize");
const Model = Sequelize.Model;
class Employee extends Model {}

module.exports=(sequelize)=>{Employee.init(
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING,
        },
        last_name:{
            type: Sequelize.STRING
        },
        job_title:{
            type: Sequelize.CHAR
        }
    },{sequelize,modelName:"employee"} )
    return Employee
}