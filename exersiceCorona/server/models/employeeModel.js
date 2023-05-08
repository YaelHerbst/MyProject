 const mongoose = require("mongoose");
const Joi = require("joi");

const EmployeeSchema = new mongoose.Schema({
  fullName: String,
  id: {
    type: String,
    unique: true
  },
  city: String,
  street: String,
  HouseNumber: String,
  DateOfBirth: Date,
  phone: String,
  cellPhone: String,
  vaccinations: [{
    dateReceived: {
      type: Date,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    }
  }],
  dateOfPositiveResult: Date,
  dateOfRecovery: Date,
});

const employeeSchema = Joi.object({
  fullName: Joi.string().required(),
  id: Joi.string().required(),
  city: Joi.string().required(),
  street: Joi.string().required(),
  HouseNumber: Joi.string().required(),
  DateOfBirth: Joi.date().required(),
  phone: Joi.string().pattern(/^\d{9}$/).required(),
  cellPhone: Joi.string().pattern(/^\d{10}$/).required(),
  vaccinations: Joi.array().max(4).items(
    Joi.object({
      dateReceived: Joi.date().required(),
      creator: Joi.string().required(),
    })
  ),
  dateOfPositiveResult: Joi.date(),
  dateOfRecovery: Joi.date(),
});

 const EmployeeModel = mongoose.model("Employee", EmployeeSchema);


// module.exports = {
//     EmployeeModel ,
//    employeeSchema, 
// };

module.exports = EmployeeModel;


