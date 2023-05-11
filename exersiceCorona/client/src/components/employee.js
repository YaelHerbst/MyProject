import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
function Employee() {

  const [employee, setEmployee] = useState({})
  const [render, setRender] = useState(false)

  const [fileDataURL, setFileDataURL] = useState("")
  const navigate=useNavigate();
  const params=useParams();
  

  async function getEmployee(){
    const {data} =await axios.get("http://localhost:5000/api/employees/"+params.id)
    let b=new Date(data.birthDay);
  setEmployee({birthDay:b,...data});
   
  }
function convertDate(date) {
  return new Date(date).getDate()+"/"+(new Date(date).getMonth()+1)+"/"+new Date(date).getFullYear()
  
}
  useEffect(() => {
    getEmployee()
    console.log(employee.dateOfVaccines);
  }, [render])
    function update() {
      navigate("/updateEmployee/"+params.id);

    }
   
  return (
  
    <div>{
      employee&&<span>
      <h2>Personal Details</h2>
       
<p>Name : {employee.fullName}</p>
<p>Id : {employee.id}</p>
<p>address : {employee.city}, {employee.street} {employee.houseNumber} street</p>
<p>DateOfBirth : {convertDate(employee.DateOfBirth)}</p>
{employee.phone&&<p>Phone : {employee.phone}</p>}
{employee.cellPhone&&<p>CellPhone : {employee.cellPhone}</p>}
<div><h2>Corona Details</h2>
{employee.vaccinations && employee.vaccinations.length > 0 && (
  <div>
    <h2>Vaccines</h2>
    {employee.vaccinations.map((item, index) => (
      <div key={index}>
        <p>Date Of Vaccines: {convertDate(item.dateReceived)}</p>
        <p>Creator Of Vaccines: {item.creator}</p>
      </div>
    ))}
  </div>
)}


{employee.dateOfPositiveResult&&<p>Date Of Illness : {convertDate(employee.dateOfPositiveResult)}</p>}
{employee.dateOfRecovery&&<p>Date Of Recovery : {convertDate(employee.dateOfRecovery)}</p>}

</div>


  </span>
         
    }
   </div>
  )
}

export default Employee