import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
    const [userPhoto, setUserPhoto] = useState(null); // State to store user's photo
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility
    const [showNav, setShowNav] = useState(false); // State to manage mobile navigation visibility
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in by reading cookies
        const accessToken = getCookie('accessToken');
        setIsLoggedIn(accessToken ? true : false);

        // Fetch user photo if user is logged in
        if (accessToken) {
            // Fetch user's photo from your server or API for now we're using a default image
            fetchUserPhoto();
        }
    }, []);

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
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="images/rentorLogo4.svg" className="h-8" alt="Flowbite Logo" />
                </a>

                <div className="hidden md:flex items-center space-x-4 ">
                    <ul className="flex flex-row items-center space-x-4">
                        <li>
                            <a href="#" className="text-gray-700 dark:text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 dark:text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 dark:text-white">Apartments</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 dark:text-white">Contact</a>
                        </li>

                        {!isLoggedIn && (
                        <li>
                            <a href="/Login" className="text-gray-700 dark:text-white">Login</a>
                        </li>
                    )}

                    </ul>


                </div>

                {isLoggedIn && (
                        <div className="relative ml-4">
                            <button onClick={toggleDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={userPhoto} alt="user photo" />
                            </button>
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 z-50 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                    <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                    </div>
                                    <ul className="py-2" aria-labelledby="user-menu-button">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                        </li>
                                        <li>
                                            <a onClick={handleLogout} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </li>
                                    </ul>
                                </div>

                            )}
                        </div>
                    )}


                <div className="md:hidden">
                    <button onClick={toggleNav} className="block text-gray-700 dark:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${showNav ? 'block' : 'hidden'}`}>
                
                <ul className="flex flex-col items-center mt-4 space-y-4">
                    <li>
                        <a href="#" className="text-gray-700 dark:text-white">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 dark:text-white">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 dark:text-white">Apartments</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 dark:text-white">Contact</a>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
