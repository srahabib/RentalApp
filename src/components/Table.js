// components/Table.js

import React, { useState } from 'react';

const Table = () => {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    // Implement your logic to add a new row
    // You can push a new object with default values for each column
    // For example:
    // setRows([...rows, { name: '', date: '', period: '', payment: '' }]);
  };

  return (
    <div className="overflow-x-auto bg-navy-blue p-4">
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto mb-4 sm:mb-0"
          onClick={addRow}
        >
          Add Row
        </button>
      </div>
      <table className="min-w-full text-white">
        <thead>
          <tr>
            <th className="border border-purple-500 px-4 py-2">Name</th>
            <th className="border border-purple-500 px-4 py-2">Date of Rent</th>
            <th className="border border-purple-500 px-4 py-2">Rental Period</th>
            <th className="border border-purple-500 px-4 py-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-purple-500 px-4 py-2">{row.name}</td>
              <td className="border border-purple-500 px-4 py-2">{row.date}</td>
              <td className="border border-purple-500 px-4 py-2">{row.period}</td>
              <td className="border border-purple-500 px-4 py-2">{row.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
