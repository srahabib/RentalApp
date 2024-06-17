import React from 'react'
import Link from 'next/link';
import EditableCurrency from '@/components/EditableCurrency/EditableCurrency'
import EditableLanguage from'@/components/EditableLanguage/EditableLanguage'
import EditableCheckbox from '@/components/Accessibility/EditableCheckbox'

const Preferences = () => {
    return (
    <div>
    <div className="h-full flex flex-col md:flex-row">
    <aside className="w-full md:w-1/4 mt-5 ml-5 bg-white text-amber-600 p-4">
    <nav>
        <ul className="space-y-4">
        <li>
        <Link href="/PersonalSettings" className="py-2 flex text-black px-4 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black mr-3 ">
            <path strokeLinecap="round" strokeLinejoin="round" 
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
            Personal details
        </Link>
        </li>

        <li>
        <Link href="/Preferences" className=" py-2 flex  px-4 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3  hover:text-amber-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
            Preferences
        </Link>
        </li>

        <li>
        <Link href="/Security" className=" py-2 flex  text-black px-4 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-black hover:text-amber-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
        Security
        </Link>
        </li>

        <li>
        <Link href="/PaymentDetails" className="py-2 flex text-black px-4 rounded hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-black hover:text-amber-600">
        <path strokeLinecap="round" strokeLinejoin="round" 
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
        Payment details   
        </Link>
        </li>            
        </ul>
    </nav>
    </aside>
<main className="flex-1 mt-5 bg-white p-4">
    <h1 className="text-xl font-bold">Preferences</h1>
    <p className="text-lg mt-5 ">Change your language and currency</p>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    
        <EditableCurrency/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <EditableLanguage/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <EditableCheckbox/>
    </main>
    </div>
</div>


    )
}

export default Preferences