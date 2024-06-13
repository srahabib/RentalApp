import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ContactDetails = () => {
    const [accessToken, setAccessToken] = useState('');
    const [formData, setFormData] = useState({
        about: ''
    });

    

    useEffect(() => {
        const token = Cookies.get('accessToken'); // Replace 'accessToken' with your actual cookie name
        setAccessToken(token);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const createOwnerResponse = await fetch("https://rentor-b.onrender.com/owner/create", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (createOwnerResponse.ok) {
                const ownerData = await createOwnerResponse.json();
                console.log("Owner Created:", ownerData);

                // After successfully creating the owner profile, send the GET request
                const userProfileResponse = await fetch("https://rentor-b.onrender.com/user/userProfile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                });

                if (userProfileResponse.ok) {
                    const userProfileData = await userProfileResponse.json();
                    console.log("User Profile Data:", userProfileData);

                    // Save the new token in the cookies
                    Cookies.set('accessToken', userProfileData.newToken, { expires: 7 }); // Set cookie with 7-day expiration

                    // Handle success, maybe redirect or show a success message
                    window.location.href = "/documentssent";
                } else {
                    const errorData = await userProfileResponse.json();
                    console.error("Error fetching user profile:", errorData);
                    // Handle error, maybe show an error message
                }
            } else {
                const errorData = await createOwnerResponse.json();
                console.error("Error creating owner:", errorData);
                // Handle error, maybe show an error message
            }
        } catch (error) {
            console.error("Network Error:", error);
            // Handle network errors or other exceptions
        }
    };

    return (
        <main>
            <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto p-4">
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    placeholder="Email address*"
                                    className="border p-3 rounded w-96"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Mobile Number*"
                                    className="border p-3 rounded w-96"
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile Number2 (Optional)"
                                    className="border p-3 rounded w-96"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Telephone (Optional)"
                                    className="border p-3 rounded w-96"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Address*"
                                    className="border p-3 rounded w-96"
                                />
                                <input
                                    type="text"
                                    placeholder="Address2 (Optional)"
                                    className="border p-3 rounded w-96"
                                />
                            </div>

                            <div className="mb-5 w-auto">
                                <textarea
                                    name="about"
                                    value={formData.about}
                                    onChange={handleInputChange}
                                    placeholder="About*"
                                    className="border p-3 rounded w-full h-32"
                                    required
                                ></textarea>
                            </div>

                            <label className="p-1">Upload Documents : National ID* , Water/Electricity Receipt* </label>
                            <div className="flex items-center justify-center w-full p-2">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>

                            <div>
                                <button type="submit" className="bg-amber-600 text-white p-3 rounded">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactDetails;
