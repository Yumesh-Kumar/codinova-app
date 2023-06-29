import React, { useState } from "react";
import ManageDepartmentModal from "./ManageDepartmentModal";
import AddEmployeeModal from "./AddEmployeeModal";

const ManagerDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [employees, setEmployees] = useState([
    {
      id: 1,
      employeeId: "EMP0001",
      employeeName: "John Doe",
      department: "ipangram",
      categoryName: "HR",
      location: "Surat",
      salary: "25000",
    },
    {
      id: 2,
      employeeId: "EMP0002",
      employeeName: "John Doe 2",
      department: "IT",
      categoryName: "Product",
      location: "Chhattisgarh",
      salary: "30000",
    },
    // Other employees...
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    email: "",
    contactNumber: "",
  });

  const handleDeleteEmployee = (id) => {
    // Filter out the employee with the specified ID
    const updatedEmployees = employees.filter((employee) => employee.id !== id);

    // Update the employees list
    setEmployees(updatedEmployees);
  };

  const handleEditEmployee = () => {
    console.log("editing");
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    // Generate a unique ID for the new employee
    const id = Date.now();

    // Create a new employee object
    const employee = {
      id,
      ...newEmployee,
    };

    // Add the new employee to the employees list
    setEmployees([...employees, employee]);

    // Clear the new employee form fields
    setNewEmployee({
      name: "",
      department: "",
      email: "",
      contactNumber: "",
    });
  };

  const handleInputChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleSubmitModal = (e) => {
    e.preventDefault();

    // Add employee logic here

    // Close the modal
    handleCloseModal();
  };

  return (
    <div className="min-h-screen flex pt-4 justify-center bg-gray-100">
      <div className=" w-full p-4">
        <h2 className="text-3xl text-center mb-6">Manager Dashboard</h2>
        <div className="bg-white shadow-md rounded px-8 py-6 mb-4 h-3/4">
          <div className="flex flex-row items-center my-4">
            <h3 className="text-lg font-bold">Employee List</h3>
            <button
              className="ml-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500"
              onClick={() => handleOpenModal2()}
            >
              Add Employee
            </button>
            <button
              className="ml-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500"
              onClick={() => handleOpenModal()}
            >
              Manage Department
            </button>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Employee Id</th>
                <th className="py-2">Employee Name</th>
                <th className="py-2">Department Name</th>
                <th className="py-2">Category Name</th>
                <th className="py-2">Location</th>
                <th className="py-2">Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="py-2 text-center">
                    <div className="flex justify-center" >
                    <input type="checkbox" class="checked:bg-blue-500 mr-1" />
                    {employee.employeeId}
                    </div>
                  </td>
                  <td className="py-2 text-center">{employee.employeeName}</td>
                  <td className="py-2 text-center">{employee.department}</td>
                  <td className="py-2 text-center">{employee.categoryName}</td>
                  <td className="py-2 text-center">{employee.location}</td>
                  <td className="py-2 text-center">{employee.salary}</td>
                  <td className="py-2 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-500 mr-2"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500"
                      onClick={() => handleEditEmployee(employee.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            <div className="bg-white w-full border border-gray-500 px-2 flex justify-center items-center ">
                <p className="py-2 font-bold text-gray-800">Total Employee 100</p>
                <p className="py-2 font-bold text-gray-800">Total Employee 100</p>
                
                <p className="py-2">
                  <button class="rounded-full bg-sky-400 px-6 py-2 text-white mx-4">Prev</button>
                </p>
                <p className="py-2">
                  <button class="rounded-full bg-sky-400 px-6 py-2 text-white ">Next</button>
                </p>
              
            </div>
      </div>
      <ManageDepartmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        onChange={handleInputChange}
        newEmployee={newEmployee}
      />
      <AddEmployeeModal
        isOpen={isModalOpen2}
        onClose={handleCloseModal2}
        onSubmit={handleSubmitModal}
        onChange={handleInputChange}
        newEmployee={newEmployee}
      />
    </div>
  );
};

export default ManagerDashboard;
