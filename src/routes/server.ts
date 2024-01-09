import express from "express";
import {Request} from "express";
import {Response} from "express";
import EcSuppliers from "../models/ec_suppliers";
import sequelize from "../config/sequelize-config";
const app = express();
const port = 3000;
 
// Middleware to parse JSON requests
app.use(express.json());


 
// app.get("/", (req: Request, res: Response) => {
//   const { name, age } = req.query;
//   res.send(`${name}, ${age}`);
// });
 
// app.post("/contact", (req: Request, res: Response) => {
//   const { name, phone, email } = req.body;
 
//   if (!name) {
//     return res.status(422).json({ error: "Name is required." });
//   }
 
//   res.status(200).json({
//     message: `Contact details for ${name} received as ${phone} and ${email}`,
//   });
// });
sequelize.sync().then(() => {
  console.log("Table synced successfully");
 
  
  app.listen(port, () => {
    console.log("Server is running on port", port);
  });

  app.get("/", async (req: Request, res: Response) => {
    const found = await EcSuppliers.findOne({
      where: { fullname: "mariyam" },
    });
 
    // Check if a record is found
    if (found) {
      res.status(200).json({
        message: "Data retrieved successfully",
        data: found,
      });
    } else {
      res.status(404).json({
        message: "Data not found",
      });
    }
  });

})
