import React, { useState } from 'react';

const EditableNationality = () => {
    const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Brazil', 'Bangladesh', 'Belgium', 'Bulgaria',
    'Cambodia', 'Canada', 'China', 'Costa', 'Denmark', 'Dominica', 'Egypt', 'England',
    'Ethiopia', 'Finland', 'France', 'Georgia', 'Germany', 'Hungary', 'India', 'Iraq',
    'Italy', 'Lebanon', 'Nigeria', 'Turkey',
];
const [nationality, setNationality] = useState('Egypt');
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState(nationality);

const handleEditClick = () => {
setIsEditing(true);
setEditValue(nationality);
};

const handleSaveClick = () => {
setNationality(editValue);
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
    <p className="text-md mb-2 sm:mb-0 sm:mr-10">Nationality</p>
    {isEditing ? (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <select
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 text-lg rounded h-10 w-full sm:w-72 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
        >
        {countries.map((country) => (
            <option key={country} value={country}>
            {country}
            </option>
        ))}
        </select>
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
        <p className="text-md text-gray-700 mb-2 sm:mb-0 sm:mr-4">{nationality}</p>
        <button onClick={handleEditClick} className="text-grey1 text-lg">
        Edit
        </button>
    </div>
    )}
</div>
);
};

export default EditableNationality;
