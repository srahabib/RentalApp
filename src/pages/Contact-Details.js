import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import UploadImage from '../components/UploadImage/UploadImage';

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
            <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-6">
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
                            <div className="flex items-center justify-center w-full py-2">

                                <UploadImage />

                            </div>

                            <div className="mt-3">
                                <button type="submit" className="text-white px-3 py-2 rounded bg-green2 text-white hover:bg-grey1 focus:ring-4 focus:outline-none focus:ring-grey1 focus:bg-bej1 focus:text-black">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactDetails;
