
//inserting data via postman
import express, { Request, Response, NextFunction } from "express";
import sequelize from "./config/sequelize-config";
import EcSuppliers from "./models/ec_suppliers";
import supplierRouter from "./routes/supplierRoutes";
import customerRouter from "./routes/customerRoutes";
import login from "./routes/login";
import { firstExample } from "./middleware/middlewareExample";
import { secondExample } from "./middleware/middlewareExample";
import updatepasswordRouter from "./routes/resetPassword";
import sequelizeSync from "./services/sequelize";
import {connectToMongoDb, stopMongoDb } from "./services/mongodb";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { initializeSocket } from "./services/socket";





  sequelizeSync();
  connectToMongoDb();
  const app = express();
  const server = createServer(app);
  
  const port = process.env.PORT || 3000;
  const io = initializeSocket(server) 
  app.use(cors());
  // Middleware to parse JSON requests
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


  // Routes

  app.use((req,res,next)=>{
    console.log("hi from middleware");
    next();
  })

  app.use("/api/supplier", supplierRouter); 
  app.use("/api/customer",customerRouter)
  app.use("/api/login",login)
  app.use("/api/updatepassword",updatepasswordRouter)

//==============================================================================
  interface CustomRequest extends Request {
    customProperty?: object;
};
 
// app.use((req: CustomRequest, res, next) => { //creating a custom property
//     firstExample(req,res,next);
// });
 
// app.use((req, res, next) => { //setting headers
//    secondExample(req,res,next)
// });


app.get("/example",firstExample,secondExample, (req: CustomRequest, res: Response) => { //cookies and headers are sent to path /example only
    console.log("Route Handler-Handling Request");
    //access modified request property
    const customProperty = req.customProperty ?? 'Not-available';

    //sending modified response
    res.send(customProperty);
});


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.emit('event emitted', "hello world")

  socket.on('event emitted front',(result)=>{
    console.log(result);
  })

  console.log('socket is', socket);

  socket.on('out of stock emit received', () => {
})
socket.on('disconnect', ()=>{
  console.log('user disconnected')
})
});


//===============================================================================
  
  // Start the server
  server.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
  });

  //====================================

  //mongodb

  process.on("SIGINT",()=>{
    sequelize.close();
    stopMongoDb();
    process.exit();
  })

  process.on("exit",()=>{
    sequelize.close();
    stopMongoDb();
  })


