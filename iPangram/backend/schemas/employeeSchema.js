const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: Number,
    default: 0,
  },
  departmentName:String,
  categoryName: {
    type: String,
    enum: ['HR', 'IT', 'SALES', 'PRODUCT', 'MARKETING'],
    required: true,
  },
  location: String,
  hobbies: [String],
  password:String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
  Employee,
};
