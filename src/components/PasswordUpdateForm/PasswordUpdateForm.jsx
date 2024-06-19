import { useState } from 'react';

const PasswordUpdateForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement password update logic
        console.log('Submitted:', { oldPassword, newPassword, confirmPassword });
        // Reset form fields
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        // Hide form
        setShowForm(false);
    };

    const handleCancelClick = () => {
        // Reset form fields
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        // Hide form
        setShowForm(false);
    };

    return (
        <div className="mt-4 flex flex-col items-start sm:items-left">
            <div className="flex items-center justify-between w-full sm:w-auto">
                <p className="text-md mt-1 flex-1">Password</p>
                {!showForm && (
                    <button
                        onClick={() => setShowForm(true)}
                        className="text-grey1 text-lg ml-20">
                        Edit
                    </button>
                )}
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-5 w-full sm:w-auto">
                    <label className="block text-md">
                        Current Password :
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                            className="border border-gray-300  ml-3 text-md rounded h-10 w-full sm:w-72 px-2 py-1 mt-1"
                        />
                    </label>
                    <label className="block mt-4 text-md">
                        New Password :
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="border border-gray-300 ml-3 text-md rounded h-10 w-full sm:w-72 px-2 py-1 mt-1"
                        />
                    </label>
                    <label className="block mt-4 text-md">
                        Confirm Password :
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="border border-gray-300 ml-3 text-md rounded h-10 w-full sm:w-72 px-2 py-1 mt-1"
                        />
                    </label>
                    <div className="flex mt-4">
                        <button
                            type="submit"
                            className="bg-grey1 ml-3 text-md text-white px-3 py-1 rounded mr-2">
                            Update Password
                        </button>
                        <button
                            type="button"
                            onClick={handleCancelClick}
                            className="text-md text-gray-600 px-3 py-1 rounded border border-gray-300">
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default PasswordUpdateForm;
