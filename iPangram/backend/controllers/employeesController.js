const bcrypt = require("bcrypt");
const { Employee } = require("./employeesController");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the employee by email
    const employee = await Employee.findOne({ email });

    if (!employee) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, employee.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Password is correct, generate a token or perform further actions
    // ...

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const signup = async (req, res) => {
  const { firstName, lastName, gender, hobbies, location, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      return res.status(409).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new employee with default department and category
    const newEmployee = new Employee({
      firstName,
      lastName,
      gender,
      hobbies,
      location,
      email,
      password: hashedPassword,
      departmentName: "General",
      categoryName: "SALES",
    });

    // Save the employee to the database
    await newEmployee.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  signup,
  login,
};
