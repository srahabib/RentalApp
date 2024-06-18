import { useState } from 'react';

const EditableCheckbox = ({ label, initialValue }) => {
  const [isChecked, setIsChecked] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(initialValue);

  const handleSave = () => {
    setIsEditing(false);
    setIsChecked(tempValue);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempValue(isChecked);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <p className="text-md sm:mr-4">Accessibility Requirements</p>
      <p className="text-md sm:mr-4 text-gray-700">Only show me accessible properties</p>

      {!isEditing ? (
        <div className="flex items-center mt-2 sm:mr-60">
          <span>{label}</span>
          <button onClick={() => setIsEditing(true)} className="text-grey1 text-lg sm:ml-3">
            Edit
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center  sm:mt-0">
          <div className="flex items-center sm:mr-4">
            <input
              type="checkbox"
              checked={tempValue}
              onChange={(e) => setTempValue(e.target.checked)}
              className="w-6 h-6 border-2 mr-2"
            />
            <span>{label}</span>
          </div>
          <div className="flex flex-col sm:flex-row  ">
            <button onClick={handleSave} className="bg-grey1 mt-3 mb-3 text-lg text-white px-3 py-1 rounded mr-2">
              Save
            </button>
            <button onClick={handleCancel} className="text-lg  text-gray-600">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableCheckbox;
