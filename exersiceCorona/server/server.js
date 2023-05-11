const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app=express();
require("./configs/database")
const EmployeeRouter =require("./routes/employeeRouter")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/employees",EmployeeRouter);
app.listen(5000,()=>{
    console.log("listening port 5000 :)");
})