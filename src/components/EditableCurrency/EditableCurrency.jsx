import React, { useState } from 'react';

const EditableCurrency = () => {
  const currencies = ['$ USD', ' € EUR', '£ LBP','$ CAD', '£ EGP', '¥ JPY', '₽ RUB', '£ GBP']; 
  const [currency, setCurrency] = useState('EGP Egyptian pound');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(currency);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditValue(currency);
  };

  const handleSaveClick = () => {
    setCurrency(editValue);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <p className="text-md sm:mr-16">Currency</p>

      {isEditing ? (
        <>
          <select
            value={editValue}
            onChange={handleChange}
            className="border border-white text-xl rounded h-14 px-2 py-1 mb-2 sm:mb-0"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>

          <div className="flex flex-col sm:flex-row">
            <button onClick={handleSaveClick} className="bg-grey1 ml-3 text-lg text-white px-3 py-1 rounded mb-2 sm:mb-0 sm:mr-2">
              Save
            </button>
            <button onClick={handleCancelClick} className="text-lg text-gray-600">
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-md text-gray-700 ml-0">{currency}</p>
          <button onClick={handleEditClick} className="text-grey1 sm:ml-3 text-lg">
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditableCurrency;
