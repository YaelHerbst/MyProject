import React from 'react';
import { useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { TextField } from '@mui/material';
function AddEmployee() {
    const navigate=useNavigate()
    //const [file, setFile] = useState(null);
    
    
     
    const [newEmployee, setNewEmployee] = useState({fullName:"",id:"",city:"",street:"",houseNumber:"",DateOfBirth:"",phone:"",cellphone:"",imageUrl:"",vaccinations:[{dateReceived:"",creator:"",},{dateReceived:"",creator:"",},{dateReceived:"",creator:"",},{dateReceived:"",creator:"",}],dateOfPositiveResult:"",dateOfRecovery:""});
    const [fileDataURL, setFileDataURL] = useState(null);
async function add() {
    const formatphone= new RegExp (/^0\d([\d]{0,1})([-]{0,1})\d{7}$/)
   const formatCellphone= new RegExp(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/ )
   if(newEmployee.cellphone&& !formatCellphone.test(newEmployee.cellphone)){
    console.log("hii");
    alert("the format of the cell phone is not good...")
    return;
   }
    
   if(newEmployee.phone&& !formatphone.test(newEmployee.phone)){
    console.log("hii");
    alert("the format of the phone is not good...")
    return;
   }
   const {data} =axios.post("http://localhost:5000/api/employees/add/",newEmployee); 

   console.log(data+" oooooooooooooooooooooo");
   navigate("/")
}
    
    function cancel() {
 navigate("/")
    
    }

    return (
        <div>
      <h1>Add employee</h1>
      <label htmlFor='name'>Full name</label>    <input id='fullName' type={"text"} onChange={(e)=>{setNewEmployee({...newEmployee,name:e.target.value});}} required/> <br/>
      <label htmlFor='id'>Id</label>    <input id='id' type={"text"} onChange={(e)=>{setNewEmployee({...newEmployee,id:e.target.value})}} required/> <br/>
      <label htmlFor='city'>City</label>    <input id='city' type={"text"} onChange={(e)=>{setNewEmployee({...newEmployee,city:e.target.value})}} required/> <br/>
      <label htmlFor='street'>Street</label>    <input id='street' type={"text"} onChange={(e)=>{setNewEmployee({...newEmployee,street:e.target.value})}} required/> <br/>
      <label htmlFor='houseNumber'>House Number</label>    <input id='houseNumber' type={"text"} onChange={(e)=>{setNewEmployee({...newEmployee,houseNumber:e.target.value})}} required/> <br/>
      <label htmlFor='DateOfBirth'>BirthDay</label>    <input id='DateOfBirth' type={"date"} onChange={(e)=>{setNewEmployee({...newEmployee,DateOfBirth:e.target.value})}} required/> <br/>
      <label htmlFor='phone'>Phone</label>    <input id='phone' type={"text"} onChange={(e)=>{setNewEmployee({...newEmployee,phone:e.target.value})}} required/> <br/>
      <label htmlFor='cellphone'>Cell Phone</label>    <input id='cellphone' type={"string"} onChange={(e)=>{setNewEmployee({...newEmployee,cellphone:e.target.value})}} required/> <br/>
      <h3>vaccinations</h3>
                       
      <label htmlFor='dateReceived'>1  : Date Of  Vaccine</label>    <input id='dateReceived' type={"date"} onChange={(e)=>{newEmployee.dateReceived[1]=e.target.value}} /> <br/> <span></span>
      <label htmlFor='creator'>manufacturer </label>    <input id='creator' type={"text"} onChange={(e)=>{newEmployee.creator[1]=e.target.value}} /> <br/>
                        
      <label htmlFor='dateReceived'> 2 Date Of  Vaccine</label>    <input id='dateReceived' type={"date"} onChange={(e)=>{newEmployee.dateReceived[2]=e.target.value}} /> <br/> <span></span>
      <label htmlFor='creator'>manufacturer </label>    <input id='creator' type={"text"} onChange={(e)=>{newEmployee.creator[2]=e.target.value}} /> <br/>
                           
      <label htmlFor='dateReceived'> 3: Date Of  Vaccine</label>    <input id='dateReceived' type={"date"} onChange={(e)=>{newEmployee.dateReceived[3]=e.target.value}} /> <br/> <span></span>
      <label htmlFor='creator'>manufacturer </label>    <input id='creator' type={"text"} onChange={(e)=>{newEmployee.creator[3]=e.target.value}} /> <br/>
                          
      <label htmlFor='dateReceived'> 4: Date Of  Vaccine</label>    <input id='dateReceived' type={"date"} onChange={(e)=>{newEmployee.dateReceived[4]=e.target.value}} /> <br/> <span></span>
      <label htmlFor='creator'>manufacturer </label>    <input id='creator' type={"text"} onChange={(e)=>{newEmployee.creator[4]=e.target.value}} /> <br/>
      <h3>           </h3>
      <label htmlFor='dateOfPositiveResult'>date Of Illness</label>    <input id='dateOfPositiveResult' type={"string"} onChange={(e)=>{setNewEmployee({...newEmployee,dateOfPositiveResult:e.target.value})}} /> <br/>
      <label htmlFor='dateOfRecovery'>date Of Recovery</label>    <input id='dateOfRecovery' type={"string"} onChange={(e)=>{setNewEmployee({...newEmployee,dateOfRecovery:e.target.value})}} /> <br/>
             
                <br/>
          <button onClick={add}>Add</button>
          <button onClick={cancel}>Cancel</button>
      
        </div>
    );
    
         
  
}
export default AddEmployee
