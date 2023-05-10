const mongoose = require("mongoose");
const Joi = require("joi");

const EmployeeSchema = new mongoose.Schema({
    fullName: String,
    id: {
        type: String,
        required: true,
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
          validate: {
            validator: (value) => {
              // Validate that the dateReceived is not in the future
              return value <= new Date();
            },
            message: "Date of vaccination must not be in the future",
          },
        },
        creator: {
          type: String,
          validate: {
            validator: (value) => {
              // Validate that the creator is not empty
              return value.trim().length > 0;
            },
            message: "Creator of vaccination certificate is required",
          },
        },
      }],
    dateOfPositiveResult: Date,
    dateOfRecovery: Date,
});

const employeeSchema = Joi.object({
    fullName: Joi.string().required(),
    id: Joi.string().pattern(/^\d+$/).required(),
    city: Joi.string().required(),
    street: Joi.string().required(),
    HouseNumber: Joi.string().required(),
    DateOfBirth: Joi.date().required(),
    phone: Joi.string().pattern(/^\d{9}$/),
    cellPhone: Joi.string().pattern(/^\d{10}$/),
    vaccinations: Joi.array().max(4).items(
        Joi.object({
          dateReceived: Joi.date().max('now').required(),
          creator: Joi.string().trim().required(),
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


