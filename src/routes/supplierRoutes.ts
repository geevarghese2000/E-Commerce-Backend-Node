import express, { Request, Response, Router } from "express";
import sequelize from "../config/sequelize-config";
import EcSuppliers from "../models/ec_suppliers";
import supplierRegistration from "../controllers/supplierControllers/supplierRegistration";
import { getSupplier } from "../controllers/supplierControllers/supplierRegistration";
import supplierProfile from "../controllers/supplierControllers/supplierProfile";
import { verifyToken } from "../middleware/verifyJwt";
import multer from "multer";

import { addProduct } from "../controllers/products/addproduct";
import { updateProduct } from "../controllers/products/editproduct";
import { getProduct } from "../controllers/products/getproduct";


const storage = multer.memoryStorage();
const upload = multer({storage: storage});


 //importing from controllers
const supplierRouter = express.Router();
supplierRouter.get("/get", async (req: Request, res: Response) => {
  getSupplier(req,res); 
  });

  //importing from controllers
  supplierRouter.post("/register", upload.single("profile_pic"), async (req: Request, res: Response) => {
    supplierRegistration(req,res);
  });

  supplierRouter.post("/getProfile",verifyToken , (req: Request, res: Response) => {
    supplierProfile(req,res);
   });

   //--------------------PRODUCT------------------------------------------
  supplierRouter.post("/addProduct",verifyToken, async (req: Request, res: Response) => {
    addProduct(req,res);
  }
  );

supplierRouter.patch("/editProduct",verifyToken,async(req:Request,res:Response)=>{
  updateProduct(req,res);
})

supplierRouter.get("/getProduct",verifyToken,async(req:Request,res:Response)=>{
  getProduct(req,res);
})

  export default supplierRouter;
