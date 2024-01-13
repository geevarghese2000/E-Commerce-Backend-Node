import { Model } from "sequelize"; //model comes in mvc architecture 

class EcSuppliers extends Model{
    public id?:number;
    public fullname!:string;
    public e_mail!:string;
    public password!:string;
    public profile_pic!:string;
    public registrationid?:string;
    public registration_timestamp?:Date;
    public createdAt?:Date;
    public updatedAt?:Date;
}
export default EcSuppliers;
