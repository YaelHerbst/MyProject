const EmployeeModel = require("./employeeModel");
const moment = require('moment');


const getEmployees = async () => {
    try {
        const employees = await EmployeeModel.find().exec();
        return employees;
    } catch (err) {
        
        console.error("Error retrieving employees:", err);
        throw err; 
    }
};


const getEmployee = async (ID) => {
    console.log("Entering getEmployee");
    try {
        const employee = await EmployeeModel.findById(ID);
        if (!employee) {
            throw new Error(`Employee with ID ${ID} not found`);
        }
        return employee;
    } catch (error) {
        console.error("Error retrieving employee:", error);
        throw error;
    }
};


const addEmployee = async (obj) => {
    let employee = new EmployeeModel({
        fullName: obj.fullName,
        id: obj.id,
        city: obj.city,
        street: obj.street,
        houseNumber: obj.houseNumber,
        DateOfBirth: moment(obj.DateOfBirth),
        phone: obj.phone,
        cellphone: obj.cellphone,
        vaccinations: obj.vaccinations,
        dateOfRecovery: obj.dateOfRecovery,
        dateOfPositiveResult: obj.dateOfPositiveResult,
    });
   
    try {
        let newEmp = await employee.save();
        console.log("the new employee added")
        return newEmp;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getEmployees,
    getEmployee,
    addEmployee,
};


