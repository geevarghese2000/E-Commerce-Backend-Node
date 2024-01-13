import { DataTypes, Sequelize } from "sequelize";
import EcSuppliers from "../types/modelTypes/ec_suppliers";
import sequelize from "../config/sequelize-config";
import bcrypt from "bcrypt";



EcSuppliers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique:true,
  },
  fullname: {
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  registrationid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:():string=>{
        return Math.floor(100000 + Math.random()*900000).toString();
    }
  },
  registration_timestamp: {
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
    modelName:'ec_suppliers', //just modenale
    tableName:'ec_suppliers',
    // hooks:{
    //     beforeCreate:(user:EcSuppliers)=>{
    //         const hashedPassword=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10)); //hashing password -
    //         user.password=hashedPassword;
    //     }
    // }
});
export default EcSuppliers;


