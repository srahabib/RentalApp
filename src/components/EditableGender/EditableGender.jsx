import React, { useState } from 'react';

const EditableGender = () => {
  const genders = ['Male', 'Female', 'Other']; // Define available genders
  const [gender, setGender] = useState('Male'); // Default gender
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(gender);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditValue(gender);
  };

  const handleSaveClick = () => {
    setGender(editValue);
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
    <p className="text-md mb-2 sm:mb-0 sm:mr-16">Gender</p>
    {isEditing ? (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <select
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 text-lg rounded h-10 w-full sm:w-72 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
        >
        {genders.map((gen) => (
            <option key={gen} value={gen}>
            {gen}
            </option>
        ))}
        </select>
        <div className="flex">
        <button onClick={handleSaveClick} className="bg-amber-600 text-lg text-white px-3 py-1 rounded mr-2">
            Save
        </button>
        <button onClick={handleCancelClick} className="text-lg text-gray-600">
            Cancel
        </button>
        </div>
    </div>
    ) : (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <p className="text-md text-gray-700 mb-2 sm:mb-0 sm:mr-4">{gender}</p>
        <button onClick={handleEditClick} className="text-amber-600 text-lg">
        Edit
        </button>
    </div>
    )}
</div>
);
};

export default EditableGender;
