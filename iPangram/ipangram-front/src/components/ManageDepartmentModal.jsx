import React from 'react';

const ManageDepartmentModal = ({ isOpen, onClose, onSubmit, onChange, newEmployee }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white w-full max-w-md mx-auto rounded shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Manage Department of Employees</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
          <label className="block text-gray-700 mb-2">Department</label>
          <select
              id="department"
              className="form-select mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
              value={newEmployee.department}
              onChange={onChange}
            >
              <option value="" >Select</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Name</label>
          <select
              id="department"
              className="form-select mt-1 block w-full border border-gray-300 rounded-md py-2 px-3"
              value={newEmployee.department}
              onChange={onChange}
            >
              <option value="" >Select</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Location</label>
            <input
              type="tel"
              name="contactNumber"
              value={newEmployee.contactNumber}
              onChange={onChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Salary</label>
            <input
              type="tel"
              name="contactNumber"
              value={newEmployee.contactNumber}
              onChange={onChange}
              className="w-full border border-gray-300 rounded py-2 px-3"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            >
              Change Department
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageDepartmentModal;
