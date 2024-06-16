import React, { useState } from 'react';

const EditableDateOfBirth = () => {
const [dateOfBirth, setDateOfBirth] = useState('Enter your Birth Date'); // Initial date of birth
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState(dateOfBirth);

const handleEditClick = () => {
setIsEditing(true);
setEditValue(dateOfBirth);
};

const handleSaveClick = () => {
setDateOfBirth(editValue);
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
    <p className="text-md mb-2 sm:mb-0 sm:mr-8">Date of Birth</p>
    {isEditing ? (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <input
        type="date"
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 text-lg rounded h-10 w-full sm:w-72 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
        />
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
        <p className="text-md text-gray-700 mb-2 sm:mb-0 sm:mr-4">{dateOfBirth}</p>
        <button onClick={handleEditClick} className="text-amber-600 text-lg">
        Edit
        </button>
    </div>
    )}
</div>
);
};

export default EditableDateOfBirth;
