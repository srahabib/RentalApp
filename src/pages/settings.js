import React from 'react'
import Link from 'next/link'; 

const settings = () => {
return (
<main className="p-4">
    <h1 className="text-3xl mx-4 mb-2 mt-14 font-bold text-center sm:text-left">Account Settings</h1>
    <p className="text-xl text-gray-500 mx-4 mb-2 text-center sm:text-left">Manage your Rentor.B experience</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    
    <Link href={"/PersonalSettings"}>
        <div className="flex flex-col sm:flex-row items-center justify-center border border-gray-200 bg-white rounded-xl p-5 mx-4 my-2 sm:mx-0">
        <div className="group">
            <div className="flex items-center group-hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mr-3 mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <h2 className="text-2xl font-bold mb-1 mt-2">Personal details</h2>
            </div>
            <p className="ml-12 text-xl text-gray-500 mb-5 group-hover:text-amber-600">Update your information and find out how it is used.</p>
            <p className="ml-12 text-xl text-amber-600 group-hover:underline">Manage personal details</p>
        </div>
        </div>
    </Link>

    <Link href="/Preferences">
        <div className="flex flex-col sm:flex-row items-center justify-start border border-gray-200 bg-white rounded-xl p-5 mx-4 my-2 sm:mx-0">
        <div className="group">
            <div className="flex items-center group-hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mr-3 mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <h2 className="text-2xl font-bold mb-1 mt-2">Preferences</h2>
            </div>
            <p className="ml-12 text-xl text-gray-500 mb-5 group-hover:text-amber-600">Change your language and currency.</p>
            <p className="ml-12 text-xl text-amber-600 group-hover:underline">Manage preferences</p>
        </div>
        </div>
    </Link>

    <Link href="/Security">
        <div className="flex flex-col sm:flex-row items-center justify-center border border-gray-200 bg-white rounded-xl p-5 mx-4 my-2 sm:mx-0">
        <div className="group">
            <div className="flex items-center group-hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mr-3 ml-3 mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2 mt-2">Security</h2>
            </div>
            <p className="ml-12 text-xl text-gray-500 mb-5 group-hover:text-amber-600">Change your security settings, set up secure authentication, or delete your account.</p>
            <p className="ml-12 text-xl text-amber-600 group-hover:underline">Manage account security</p>
        </div>
        </div>
    </Link>

    <Link href="/PaymentDetails">
        <div className="flex flex-col sm:flex-row items-center justify-center border border-gray-200 bg-white rounded-xl p-5 mx-4 my-2 sm:mx-0">
        <div className="group">
            <div className="flex items-center group-hover:text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 mr-3 ml-3 mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
            <h2 className="text-2xl font-bold mb-2 mt-2">Payment details</h2>
            </div>
            <p className="ml-12 text-xl text-gray-500 mb-5 group-hover:text-amber-600">Securely add or remove your payment cards to make it easier during renting process.</p>
            <p className="ml-12 text-xl text-amber-600 group-hover:underline">Manage your payment</p>
        </div>
        </div>
    </Link>

    </div>
</main>
)
}

export default settings;
