import './App.css';
import React from 'react';
import AllEmployees from './components/allEmployees';
import {Route,Routes} from 'react-router-dom'
import Employee from './components/employee';
import AddEmployee from './components/addEmployee';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllEmployees/>}/>
        <Route path='employee/:id' element={<Employee />}/>
        <Route path='addEmployee' element={<AddEmployee/>} /> 
      </Routes>
      {/* <AllMembers /> */}
    </div>
  );
}

export default App;