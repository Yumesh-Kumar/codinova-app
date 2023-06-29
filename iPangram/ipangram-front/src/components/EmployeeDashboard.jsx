import React from 'react';

const EmployeeDashboard = () => {
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    department: 'Engineering',
    // Other employee details...
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Redirect to the login page or clear the authentication state
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="max-w-md w-full">
        <h2 className="text-3xl text-center mb-6">Welcome, {employee.firstName} {employee.lastName}!</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-lg font-bold mb-4">Employee Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <p className="text-gray-700">{employee.firstName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <p className="text-gray-700">{employee.lastName}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Department</label>
            <p className="text-gray-700">{employee.department}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <p className="text-gray-700">{employee.department}</p>
          </div>
          {/* Other employee details can be displayed here */}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-red-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
