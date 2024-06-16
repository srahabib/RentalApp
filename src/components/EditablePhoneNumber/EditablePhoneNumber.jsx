import React, { useState } from 'react';

const EditablePhoneNumber = () => {
const [phoneNumber, setPhoneNumber] = useState('+20123456789');
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState('');
const [error, setError] = useState('');

const handleEditClick = () => {
setIsEditing(true);
setEditValue(phoneNumber);
};

const handleSaveClick = () => {
if (isValidPhoneNumber(editValue)) {
    setPhoneNumber(editValue);
    setError('');
    setIsEditing(false);
} else {
    setError('Please enter a valid phone number.');
}
};

const handleCancelClick = () => {
setError('');
setIsEditing(false);
};

const handleChange = (e) => {
setEditValue(e.target.value);
};

// Function to validate phone number format
const isValidPhoneNumber = (phoneNumber) => {
// Phone number validation logic
const phoneRegex = /^\+\d{11,15}$/; // Egyptian phone number format: +20XXXXXXXXXXX
return phoneRegex.test(phoneNumber);
};

return (
<div className="flex flex-col sm:flex-row items-center">
    <p className="text-md mb-2 sm:mb-0 sm:mr-16">Phone</p>
    {isEditing ? (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <input
        type="tel"
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 text-lg rounded h-10 w-full sm:w-72 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
        pattern="^\+\d{11,15}$"
        title="Please enter a valid phone number (e.g., +20123456789)"
        required
        />
        <div className="flex">
        <button onClick={handleSaveClick} className="bg-amber-600 text-lg text-white px-3 py-1 rounded mr-2">
            Save
        </button>
        <button onClick={handleCancelClick} className="text-lg text-gray-600">
            Cancel
        </button>
        </div>
        {error && <p className="text-red-500 mt-2 sm:mt-0 sm:ml-4">{error}</p>}
    </div>
    ) : (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <p className="text-md text-gray-700 mb-2 sm:mb-0 sm:mr-4">{phoneNumber}</p>
        <button onClick={handleEditClick} className="text-amber-600 text-lg">
        Edit
        </button>
    </div>
    )}
</div>
);
};

export default EditablePhoneNumber;
