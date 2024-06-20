import { useState, useEffect } from 'react';

export default function Profile() {
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthdate: '',
        address: '',
        bio: '', 
    });

    useEffect(() => {
        const accessToken = getCookie('accessToken');
        if (accessToken) {
            fetchUserData(accessToken);
        }
    }, []);

    const fetchUserData = async (accessToken) => {
        try {
            const response = await fetch('https://rentor-b.onrender.com/auth/user', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) throw new Error('Failed to fetch user data');

            const userData = await response.json();
            setUser({
                firstName: userData.name || 'Sara',
                lastName: userData.lastName || 'Habib',
                email: userData.email || 'sara@gmail.com',
                phone: userData.phone || '0112356842',
                birthdate: userData.birthdate || '5/4/2002',
                address: userData.address || '',
                bio: userData.bio || 'I love tech and I love pets ',
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Profile Information</h1>
                <button
                    onClick={toggleEditMode}
                    className="text-green1 hover:text-grey1"
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
                        <label className="block text-gray-700">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={user.phone}
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
                        <label className="block text-gray-700">Birthdate:</label>
                        <input
                            type="date"
                            name="birthdate"
                            value={user.birthdate.split('T')[0]}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={user.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md"
                        />
                    </div>
                </>
            ) : (
                <>
                    <p className="mb-4 text-gray-700">{user.bio}</p>
                    <div className="mb-4">
                        <strong>First Name:</strong> {user.firstName}
                    </div>
                    <div className="mb-4">
                        <strong>Last Name:</strong> {user.lastName}
                    </div>
                    <div className="mb-4">
                        <strong>Phone:</strong> {user.phone}
                    </div>
                    <div className="mb-4">
                        <strong>Email:</strong> {user.email}
                    </div>
                    <div className="mb-4">
                        <strong>Birthdate:</strong> {user.birthdate.split('T')[0]}
                    </div>
                    {/* <div className="mb-4">
                        <strong>Address:</strong> {user.address}
                    </div> */}
                </>
            )}
        </div>
    );
}
