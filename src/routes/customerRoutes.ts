import express, { Request, Response, Router } from "express";
import sequelize from "../config/sequelize-config";
import EcCustomers from "../models/ec_customers";
import customerRegistration from "../controllers/customerControllers/customerRegistration";
import { customerGet } from "../controllers/customerControllers/customerRegistration";
import customerProfile from "../controllers/customerControllers/customerProfile";
import { verifyToken } from "../middleware/verifyJwt";

import addCart from '../controllers/cart/addCart';
import updateCart from '../controllers/cart/updatecart';
import getCart from '../controllers/cart/getCart';


  //importing from controllers
const customerRouter = express.Router();
customerRouter.get("/get", async (req: Request, res: Response) => {
   customerGet(req,res);
  });

    //importing from controllers
  customerRouter.post("/register", async (req: Request, res: Response) => {
   customerRegistration(req,res);
  });

  customerRouter.post("/get",verifyToken , (req: Request, res: Response) => {
    customerProfile(req,res);
   });

//-----------------Cart Start-----------------------------------
   customerRouter.post("/addToCart",verifyToken,  (req: Request, res: Response) => {
    addCart(req, res);
  });
   
  customerRouter.put("/updateCart",verifyToken,  (req: Request, res: Response) => {
    updateCart(req, res);
  });
   
  customerRouter.get("/getCart",verifyToken,  (req: Request, res: Response) => {
    getCart(req, res);
  });
  //-----------------Cart End-----------------------------------

  export default customerRouter;
