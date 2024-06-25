import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
    const [userPhoto, setUserPhoto] = useState(null); // State to store user's photo
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
    const [showNav, setShowNav] = useState(false); // State to manage mobile navigation visibility
    const [userData, setUserData] = useState(null);
    const [userRole, setUserRole] = useState(''); // State to track user's role
    const [owner, setOwner] = useState(''); // State to track user's role
    const [f, setF] = useState(false); // State to track user's role



    useEffect(() => {
        // Check if user is logged in by reading cookies
        const accessToken = getCookie('accessToken');
        setIsLoggedIn(accessToken ? true : false);
    
        // Fetch user photo and additional data if user is logged in
        if (accessToken) {
            // Fetch user's photo from your server or API for now we're using a default image
            fetchUserPhoto();
    
            // Fetch user data
            fetchUserData();

            fetchUserRole(); // Fetch the user's role
        }
    }, []);
    

const fetchUserData = async () => {
    try {
        const accessToken = getCookie('accessToken');
        //console.log(accessToken)
        if (!accessToken) {
            throw new Error('Access token not found');
        }

        const response = await fetch('https://rentor-b.onrender.com/user/all', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const allUserData = await response.json();
        const loggedInUserEmail = getLoggedInUserEmail(allUserData);
        const loggedInUserData = allUserData.find(user => user.email === loggedInUserEmail);
        
        console.log('Logged-in user data:', loggedInUserData);
        setUserData(loggedInUserData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

const fetchUserRole = async () => {
    try {
        const accessToken = getCookie('accessToken');
        if (!accessToken) {
            throw new Error('Access token not found');
        }

        const response = await fetch('https://rentor-b.onrender.com/auth/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user role');
        }

        const data = await response.json();
        setUserRole(data.role); // Update user role
        setOwner(data.isOwner)
    } catch (error) {
        console.error('Error fetching user role:', error);
    }
};

// const handleSwitchRole = () => {
//     if (owner) {
//         setUserRole('user');
//         setOwner(false);
//     } else {
//         setUserRole('owner');
//         setOwner(true);
//     }
//     setF(!f);
// };

const Switchtuser = () => {
    setF(true);

};

const Switchtowner = () => {
    setF(false);

};


// Function to get the email of the logged-in user
const getLoggedInUserEmail = (allUserData) => {
    const accessToken = getCookie('accessToken');
    if (!accessToken) {
        return null;
    }
    // Extract and decode the JWT token payload
    const tokenPayload = accessToken.split('.')[1];
    const decodedPayload = atob(tokenPayload);
    const { email } = JSON.parse(decodedPayload);
    return email;
};

    // Function to get cookie value by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    // Function to fetch user photo
    const fetchUserPhoto = async () => {
        // Assuming you have a static URL for the user icon
        const userIconUrl = '/images/Host.jpg';
        setUserPhoto(userIconUrl);
    };

    const handleLogout = () => {
        // Clear the access token
        document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload();
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="bg-green1 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="images/RentorLogo2 White.png" className="h-8 pr-5" alt="Flowbite Logo" />
                </a>

                <div className="hidden md:flex items-center space-x-4 flex-grow">
                    <ul className="flex flex-row items-center space-x-4 ">
                        <li>
                            <a href="/" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Home</a>
                        </li>
                       
                        <li>
                            <a href="/Search" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Apartments</a>
                        </li>
                        <li>
                            <a href="/priceprediction" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Predict</a>
                        </li>
                        <li>
                            <a href="/About" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">About</a>
                        </li>
                        <li>
                            <a href="/Contact" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Contact</a>
                        </li>

                        </ul>

 
                    </div>
                
                    {isLoggedIn && (
                <div className='flex flex-row '>
                    <a className='text-bej1 font-bold text-xs mt-2 hover:text-grey1'>
                        {!owner ? (
                            <a href="/Contact-Details" className="block text-sm text-bej1 hover:bg-grey1">Become an owner</a>
                        ) : (
                            f === true ? (
                                <a onClick={Switchtowner} className='switch-to-owner'>Switch to User </a>
                            ) : (
                                <a onClick={Switchtuser} className='switch-to-user'>Switch to Owner</a> 
                            )
                        )}

                        
                    </a>
                        <div className="relative ml-4 pr-8">
                            
                            <button onClick={toggleDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false">
                                <span className="sr-only">Open user menu</span>
                                
                                <img className="w-8 h-8  rounded-full" src={userPhoto} alt="user photo" />
                            </button>
                            
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 z-50 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">{userData ? userData.firstName : 'User'}</span>
                                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{userData ? userData.email : 'User@example.com'}</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                         <li>
                                            <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                                        </li>
                                        {f === true && (
                                            <li>
                                                <a href="/propertyDetails2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Post Property</a>
                                            </li>
                                        )}

                                        {f === true && (
                                            <li>
                                                <a href="/DashOwner" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                            </li>
                                        )}
                                        <li>
                                            <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a onClick={handleLogout} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

                            )}
                        </div>
                        </div>
                    )}


                    <div className="flex flex-row items-center space-x-4 ">
                        {!isLoggedIn && (
                            
                        <div>
                        <a href="/Login" type="button" class="text-black bg-white hover:bg-grey1 hover:text-white focus:ring-4 focus:outline-none focus:ring-grey1 focus:bg-white focus:text-black font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2">

                        Login
                        </a>
                        {/* <a href="/Register2" type="button" class="text-white bg-amber-600 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center">
                        Signup

                        </a> */}

                        </div>   

                        )}
                    </div>

                </div>

                {/* Mobile Navigation */}
                
                <div className="md:hidden absolute top-0 right-0 m-4">
                    <button onClick={toggleNav} className="block text-gray-700 dark:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            

            {/* Mobile Navigation */}
            <div className={`md:hidden ${showNav ? 'block' : 'hidden'}`}>
                
                <ul className="flex flex-col items-center mt-4 space-y-4 ">
                    <li>
                        <a href="/" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Home</a>
                    </li>
                    <li>
                        <a href="/Search" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Apartments</a>
                    </li>
                    <li>
                            <a href="/priceprediction" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Predict</a>
                    </li>
                    <li>
                        <a href="About" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">About</a>
                    </li>
                    <li>
                        <a href="/Contact" className="text-white dark:text-white hover:text-lg transition-all duration-200 hover:text-grey1">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;