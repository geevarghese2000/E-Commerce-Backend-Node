import express from "express";
import e, { Request,Response } from "express";
import EcSuppliers from "../models/ec_suppliers";
import jwt from "jsonwebtoken";
const loginRouter = express.Router();

loginRouter.post('/',async (req:Request, res:Response) => {
    try {
        let data;
        const { client_type, e_mail, password } = req.query;
        if (client_type == "customer") {
            console.log("Customer Data:\n")
        } else if (client_type == "supplier"){
            console.log('Supplier Data:\n')
            data = await EcSuppliers.findOne({
                where: {e_mail: e_mail}, raw:true
            })
            if (data?.password === password) {
                console.log("Login Success\n");
                res.status(200).json("Message: Login Success")
            } else{
                console.log("Login Failed");
                res.status(401).json("Message: Login Failed")
            }
        }
        
        const token = jwt.sign(
            { userId: data?.id, client_type },
            'your-secret-key', // Replace with your secret key
            { expiresIn: '24h' } // Token expiration time
          );
    } catch (error: any) {
        console.log(error)
        res.status(500).json({error: error.toString()})
    }
})
// loginRouter.post('/',async (req:Request, res:Response) => {
//     try {

//     } catch (error: any) {
//         console.log(error)
//         res.status(500).json({error: error.toString()})
//     }
// })

export default loginRouter;