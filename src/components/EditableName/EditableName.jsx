import { useState } from 'react';

const EditableName = () => {
const [name, setName] = useState('John Doe');
const [isEditing, setIsEditing] = useState(false);
const [editValue, setEditValue] = useState('');

const handleEditClick = () => {
setIsEditing(true);
setEditValue(name);
};

const handleSaveClick = () => {
setName(editValue);
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
    <p className="text-md mb-2 sm:mb-0 sm:mr-16">Name</p>
    {isEditing ? (
    <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
        <input
        type="text"
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 text-xl rounded h-10 w-full sm:w-72 px-2 py-1 mb-2 sm:mb-0 sm:mr-4"
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
        <p className="text-md text-gray-700 mb-2 sm:mb-0 sm:mr-4">{name}</p>
        <button onClick={handleEditClick} className="text-grey1 text-lg">
        Edit
        </button>
    </div>
    )}
</div>
);
};

export default EditableName;
