import React from "react";
import{useRouter} from 'next/router'
import UploadImage from '../components/UploadImage/UploadImage';


const PropertyDetails = () => {
    const router = useRouter()
    const handleClick=()=>{
        router.push('/view')
    }
    return (
        <main>
        <ol class="mx-56 mt-10 mb-10  flex  items-center w-auto">
<li class="flex ml-20 w-full items-center text-black dark:text-orange-500 after:content-[''] after:w-full after:h-1 after:border-b 
after:border-amber-100 after:border-4 after:inline-block dark:after:border-amber-600">
    <span class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
    class="w-6 h-6 bg-amber-600 ">
    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>

    </span>
</li>
<li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-amber-700">
    <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

    </span>
</li>
<li class="flex w-full items-center after:content-[''] after:w-full after:h-1 
after:border-b after:border-gray-100 after:border-4 after:inline-block 
dark:after:border-gray-700">
    <span class="flex items-center justify-center w-10 h-10 bg-gray-100
    rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>

    </span>
</li>
<li class="flex items-center w-full">
    <span class="flex items-center justify-center w-10 h-10 bg-gray-100
     rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
     stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
    </span>
</li>
</ol>

    <div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Category</h1>
        
            <div className=" justify-start grid grid-cols-1 md:grid-cols-4 gap-2 mb-3">
    < form className="max-w-sm flex justify-start py-5">
    <select id="countries" className=" block mb-2 text-sm text-gray-600 dark:text-gray-400 bg-white border border-gray-300  rounded-lg    w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue>Housing</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    </select>
    </form>

    < form className="max-w-sm mx-auto py-5">
    <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue>Rent</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
    </select>
    </form>
    </div>
    </div>
    </div>

    <div className="bg-white dark:bg-gray-800 transition-colors duration-300" />
    <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">General Information</h1>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Title" className=" text-lg border p-2 rounded w-full" />
                </div>
                <div className="mb-4">
                        <label for="message" className="block mb-2 text-lg text-gray-600 dark:text-gray-400">Description</label>

                        <textarea rows="5" name="message" id="message" placeholder="descripe your home" className="text-lg border p-2 rounded w-full " required></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="price" class="text-lg border p-2 rounded w-full" />                    <div className="justify-start grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
    
                    </div>
                    </div>
                


                <div className="justify-start grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <form className="max-w-sm flex justify-start">
                    <select id="countries" className=" block mb-2 text-lg text-gray-400 dark:text-gray-400 bg-white border border-gray-300 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option defaultValue>Type</option>
                    <option value="D">Duplex</option>
                    <option value="G">Garden Apartment</option>
                    <option value="T">Triplex</option>
                    <option value="S">Studio</option>
                    <option value="S">House</option>
                    <option value="S">Villa</option>

                    </select>
                </form>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Number of rooms" className="border p-2 rounded w-full required" />
                    <input type="text" placeholder="Number of living rooms" className="border p-2 rounded w-full" />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Gross M²" className="border p-2 rounded w-full" />
                    <input type="text" placeholder="Net M²" className="border p-2 rounded w-full" />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Warming Type" className="border p-2 rounded w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Building Age" className="border p-2 rounded w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Floor Location" className="border p-2 rounded w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Street address" className="border p-2 rounded w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Rental income" className="border p-2 rounded w-full required" />
                    <input type="text" placeholder="Type" className="border p-2 rounded w-full" />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <input type="text" placeholder="City" className="border p-2 rounded w-full"/>
                    <input type="text" placeholder="State / Province" className="border p-2 rounded w-full" />
                    <input type="text" placeholder="ZIP / Postal code" className="border p-2 rounded w-full" />
                </div>

        

                <UploadImage/>
                


                <button onClick={handleClick}  type="button" id="theme-toggle" class="px-5 mt-10 text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors">
                Next
            </button>
            </div>
            </div>




            




</main>                        

    );

    }
    export default PropertyDetails