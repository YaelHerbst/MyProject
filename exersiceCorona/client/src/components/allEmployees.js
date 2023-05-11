import axios from 'axios'
import React,{useState,useEffect,useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import AddEmployee from './addEmployee';
function AllEmployees() {
  const navigate=useNavigate();

    const [employees, setEmployees] = useState([])
  async function getEmployees(){
   
  }
  useEffect(() => {
      
    getEmployees()
  }, [])
  useEffect(() => {
    axios.get('http://localhost:5000/api/employees/')
      .then(response => {
          console.log(response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [navigate]);
  function navEmployee(_id) {
    navigate("/employee/"+_id)
  }
  function addEmployee() {
    navigate('/addEmployee')
  }
  function addNewEmployee(employee) {
    setEmployees([...employees, employee]);
  }

  
  return (
    <div>
      <h1>All Employees</h1>
        <ul>
        {
         employees && employees.map((m, i) => {
            console.log(m.fullName);
            return <li key={i} onClick={() => { navEmployee(m._id) }}>{m.fullName}</li>
          })}
       
        </ul>

        <button onClick={addEmployee}>Add employee</button>
        </div>
  )
}

export default AllEmployees