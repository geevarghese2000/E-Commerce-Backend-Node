import { DataTypes, Sequelize } from "sequelize";
import EcCustomers from "../types/modelTypes/ec_customers";
import sequelize from "../config/sequelize-config";
import bcrypt from "bcrypt";



EcCustomers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique:true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  e_mail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_pic: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  registration_id: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:():string=>{
        return Math.floor(100000 + Math.random()*900000).toString();
    }
  },
  reg_time_stamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:Sequelize.literal('CURRENT_TIMESTAMP'),
  },
},{
    sequelize,
    modelName:'ec_customers', //just modenale
    tableName:'ec_customers',
    // hooks:{
    //     beforeCreate:(user:EcSuppliers)=>{
    //         const hashedPassword=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10)); //hashing password -
    //         user.password=hashedPassword;
    //     }
    // }
});
export default EcCustomers;


