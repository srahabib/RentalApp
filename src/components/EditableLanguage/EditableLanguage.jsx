import React, { useState } from 'react';

const EditableLanguage = () => {
const languages = [
{ code: 'en', name: 'English', flag: 'US' },
{ code: 'ar', name: 'Arabic', flag: 'AR' }
];

const [language, setLanguage] = useState('en'); 
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState(language);

const handleEditClick = () => {
setIsEditing(true);
setEditValue(language);
};

const handleSaveClick = () => {
setLanguage(editValue);
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
    <p className="text-md sm:mr-4 mb-2 sm:mb-0">Language</p>

    {isEditing ? (
    <>
        <select
        value={editValue}
        onChange={handleChange}
        className="border border-white text-xl rounded h-14 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
        >
        {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
            </option>
        ))}
        </select>
        <div className="flex flex-col sm:flex-row">
        <button onClick={handleSaveClick} className="bg-grey1 text-lg text-white px-3 py-1 rounded mb-2 sm:mb-0 sm:mr-2">
            Save
        </button>
        <button onClick={handleCancelClick} className="text-lg text-gray-600">
            Cancel
        </button>
        </div>
    </>
    ) : (
    <>
        <p className="text-md text-gray-700 sm:ml-10 mb-2 sm:mb-0">
        {languages.find((lang) => lang.code === language)?.flag}{' '}
        {languages.find((lang) => lang.code === language)?.name}
        </p>
        <button onClick={handleEditClick} className="text-grey1 text-lg sm:ml-4">
        Edit
        </button>
    </>
    )}
</div>
);
};

export default EditableLanguage;
