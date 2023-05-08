//--הקוד הראשוני שלא רץ
// const EmployeeModel = require("./employeeModel");

// const getEmployees = () => {
//   return new Promise((resolve, reject) => {
//     EmployeeModel.find({}, (err, data) => {
//       err && reject(err);
//       data && resolve(data);
//     });
//   });
// };

// const getEmployee = (ID) => {
//     return new Promise((resolve, reject) => {
//       EmployeeModel.findById(ID, (err, data) => {
//         err && reject(err);
//         data && resolve(data);
//       });
//     });
//   };

// const addEmployee = async (obj) => {
//   let employee = new EmployeeModel({
//     fullName: obj.fullName,
//     id: obj.id,
//     city: obj.city,
//     street: obj.street,
//     houseNumber: obj.houseNumber,
//     DateOfBirth: obj.DateOfBirth,
//     phone: obj.phone,
//     cellphone: obj.cellphone,

//     //imageUrl: obj.imageUrl,

//     vaccinations: obj.vaccinations,
//     dateOfPositiveResult: obj.dateOfPositiveResult,
//     dateOfRecovery: obj.dateOfRecovery,
//   });
//   member.dateOfVaccines.length < 4 &&
//     [...Array(4 - member.dateOfVaccines.length)].map((m, i) => {
//       member.dateOfVaccines.push(null);
//       console.log(member.dateOfVaccines.length);
//       member.makerOfVaccines.push(null);
//     });
    
//   member.save((e) => {
//     if (e) console.log(e + " ???????????");
//   });
// };

// module.exports = {
//     getEmployees,
//     getEmployee,
//     addEmployee,
//   };----------------------------------------------------------
//הקוד השני שרץ טוב עם exec()אבל לא תופס שגיאות
// const EmployeeModel = require("./employeeModel");

// const getEmployees = () => {
//   return EmployeeModel.find().exec();
// };

// const getEmployee = (ID) => {
//   return EmployeeModel.findById(ID).exec();
// };

// const addEmployee = (obj) => {
//   let employee = new EmployeeModel({
//     fullName: obj.fullName,
//     id: obj.id,
//     city: obj.city,
//     street: obj.street,
//     houseNumber: obj.houseNumber,
//     DateOfBirth: obj.DateOfBirth,
//     phone: obj.phone,
//     cellphone: obj.cellphone,
//     vaccinations: obj.vaccinations,
//     dateOfPositiveResult: obj.dateOfPositiveResult,
//     dateOfRecovery: obj.dateOfRecovery,
//   });

//   if (employee.vaccinations.length < 4) {
//     for (let i = employee.vaccinations.length; i < 4; i++) {
//       employee.vaccinations.push({
//         dateReceived: null,
//         creator: null,
//       });
//     }
//   }

//   return employee.save();
// };

// module.exports = {
//   getEmployees,
//   getEmployee,
//   addEmployee,
// };----------------------------
const EmployeeModel = require("./employeeModel");

const getEmployees = () => {
  return EmployeeModel.find().exec()
    .catch((err) => {
      // Handle the error here
      console.error("Error retrieving employees:", err);
      throw err; // Optional: rethrow the error to propagate it further
    });


// return new Promise((resolve, reject) => {
//     EmployeeModel.find({}, (err, data) => {
//       err && reject(err);
//       data && resolve(data);
//     });
//   });
};

const getEmployee = (ID) => {
  return EmployeeModel.findById(ID).exec()
    .catch((err) => {
      // Handle the error here
      console.error("Error retrieving employee:", err);
      throw err; // Optional: rethrow the error to propagate it further
    });
};

const addEmployee = async(obj) => {
  let employee = new EmployeeModel({
    fullName: obj.fullName,
    id: obj.id,
    city: obj.city,
    street: obj.street,
    houseNumber: obj.houseNumber,
    DateOfBirth: obj.DateOfBirth,
    phone: obj.phone,
    cellphone: obj.cellphone,
    vaccinations: obj.vaccinations,
    dateOfPositiveResult: obj.dateOfPositiveResult,
    dateOfRecovery: obj.dateOfRecovery,
  });
  if (employee.vaccinations.length < 4) {
    for (let i = employee.vaccinations.length; i < 4; i++) {
      employee.vaccinations.push({
        dateReceived: null,
        creator: null,
      });
    }
  }
  try {
    await employee.save();
    console.log("the new employee added")
  } catch (err) {
    console.log(err);
  }
};
// const employeeData = {
//     fullName: "John Doe",
//     id: "123456789",
//     city: "New York",
//     street: "123 Main St",
//     HouseNumber: "1A",
//     DateOfBirth: new Date("1990-01-01"),
//     phone: "1234567890",
//     cellPhone: "9876543210",
//     vaccinations: [
//       {
//         dateReceived: new Date("2022-01-01"),
//         creator: "Doctor A",
//       },
//     ],
//     dateOfPositiveResult: new Date("2022-02-01"),
//     dateOfRecovery: new Date("2022-02-15"),
//   };
  
//   const employee = new EmployeeModel(employeeData);
//   employee.save()
//   .then(savedEmployee => {
//     console.log("Employee saved successfully:", savedEmployee);
//     // Additional logic after saving the employee
//   })
//   .catch(error => {
//     console.error("Error saving employee:", error);
//     // Error handling logic
//   });

  

module.exports = {
  getEmployees,
  getEmployee,
  addEmployee,
};


