import { useState } from 'react';

export default function Profile() {
const [editMode, setEditMode] = useState(false);
const [user, setUser] = useState({
fullName: 'Reham Ahmed',
mobile: '(20) 123 1234 123',
email: 'rehamm@mail.com',
location: 'Egypt',
bio: "Hi, I'm Reham Ahmed, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
});

const handleChange = (e) => {
const { name, value } = e.target;
setUser((prevUser) => ({ ...prevUser, [name]: value }));
};

const toggleEditMode = () => {
setEditMode(!editMode);
};

return (

<div className="max-w-sm mx-auto bg-white rounded-lg p-6">
    <div className="flex justify-between items-center mb-4">
    <h1 className="text-xl font-semibold">Profile Information</h1>
    <button
        onClick={toggleEditMode}
        className="text-amber-500 hover:text-amber-700"
    >
        {editMode ? 'Save' : 'Edit'}
    </button>
    </div>
    {editMode ? (
    <>
        <textarea
        name="bio"
        value={user.bio}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
        />
        <div className="mb-4">
        <label className="block text-gray-700">Full Name:</label>
        <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Mobile:</label>
        <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700">Location:</label>
        <input
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
        />
        </div>
    </>
    ) : (
    <>
        <p className="mb-4 text-gray-700">{user.bio}</p>
        <div className="mb-4">
        <strong>Full Name:</strong> {user.fullName}
        </div>
        <div className="mb-4">
        <strong>Mobile:</strong> {user.mobile}
        </div>
        <div className="mb-4">
        <strong>Email:</strong> {user.email}
        </div>
        <div className="mb-4">
        <strong>Location:</strong> {user.location}
        </div>
    </>
    )}
</div>
);
}