import React, { useState } from 'react';

const EditableEmail = () => {
const [email, setEmail] = useState('example@example.com');
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState('');
const [error, setError] = useState('');

const handleEditClick = () => {
setIsEditing(true);
setEditValue(email);
};

const handleSaveClick = () => {
if (isValidEmail(editValue)) {
    setEmail(editValue);
    setError('');
    setIsEditing(false);
} else {
    setError('Please enter a valid email address.');
}
};

const handleCancelClick = () => {
setError('');
setIsEditing(false);
};

const handleChange = (e) => {
setEditValue(e.target.value);
};

// Function to validate email format
const isValidEmail = (email) => {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
};

return (
<div className="flex flex-col sm:flex-row items-center">
    <p className="text-md mb-2 sm:mb-0 sm:mr-16">Email</p>
    {isEditing ? (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <input
        type="email"
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 text-lg rounded h-10 w-full sm:w-72 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
        />
        <div className="flex">
        <button onClick={handleSaveClick} className="bg-grey1 text-lg text-white px-3 py-1 rounded mr-2">
            Save
        </button>
        <button onClick={handleCancelClick} className="text-lg text-gray-600">
            Cancel
        </button>
        </div>
    </div>
    ) : (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <p className="text-md text-gray-700 mb-2 sm:mb-0 sm:mr-4">{email}</p>
        <button onClick={handleEditClick} className="text-grey1 text-lg">
        Edit
        </button>
    </div>
    )}
    {error && <p className="text-red-500 mt-2 sm:mt-0 sm:ml-4">{error}</p>}
</div>
);
};

export default EditableEmail;
