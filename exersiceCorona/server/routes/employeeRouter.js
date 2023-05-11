const express = require("express")
const router = express.Router();
const EmployeeBL = require("../models/employeeBL")


router.get("/",async function(req,res){
    let data = await EmployeeBL.getEmployees()
return res.status(200).json(data)
})



router.get('/:id',async function(req,res){
    const ID=req.params.id
    console.log("req=",req.params)
    let data = await EmployeeBL.getEmployee(ID)
return res.status(200).json(data)
})



router.post("/add/",async function(req,res){
    let data = await EmployeeBL.addEmployee(req.body)
return res.status(200).json(data)
})


module.exports=router;