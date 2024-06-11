import React from "react";


const ContactDetails = () => {

    return (
<main>

<div class="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto p-4">
        <div class="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Contact</h1>
            <form>
                {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="First name" class="border p-3 rounded w-96 "/> 
                    <input type="text" placeholder="Last name" class="border p-3 rounded w-96"/>
                </div> */}
                <div class="mb-5">
                    <input type="email" placeholder="Email address*" class="border p-3 rounded w-96" />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Mobile Number*" class="border p-3 rounded w-96 "/> 
                    <input type="text" placeholder="Mobile Number2 (Optional)" class="border p-3 rounded w-96"/>
                </div>
                <div class="mb-5">
                    <input type="text" placeholder="Telephone (Optional)" class="border p-3 rounded w-96 "/> 
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Address*" class="border p-3 rounded w-96 "/> 
                    <input type="text" placeholder="Address2 (Optional)" class="border p-3 rounded w-96"/>
                </div>
            
                <div class="mb-5 w-auto">
                    <textarea placeholder="About*" class="border p-3 rounded w-full h-32"></textarea>
                </div>
                 <label className="p-1">Upload Documents : National ID* , Water/Electricity Receipt* </label>
                
                <div class="flex items-center justify-center w-full p-2">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
                <div>
                    <a href="/documentssent" type="submit" class="bg-amber-600 text-white p-3 rounded">Submit</a>
                </div>
            </form>
        </div>

<link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.min.css" />


<div class="flex  w-auto  mb-5 mt-5 items-center border-l-8 border-amber-500 bg-white p-4 text-gray-900 shadow-lg">
    <div class="min-w-0">
        <h2 class="overflow-hidden text-ellipsis whitespace-nowrap">I want to be informed about all announcements and campaigns via commercial electronic mail.</h2>
    </div>

<label for="toggle-example" class="flex items-center cursor-pointer relative  ml-5 mt-5 mb-4">
<input type="checkbox" id="toggle-example" class="sr-only" />
<div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
<span class="ml-3 text-gray-900 text-sm font-medium mr-5">Email</span>
</label>

<label for="toggle-example-checked" class="flex items-center cursor-pointer relative mt-5 mb-4">
<input type="checkbox" id="toggle-example-checked" class="sr-only" />
<div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
<span class="ml-3 text-gray-900 text-sm font-medium">SMS</span>
</label>
</div>

<script src="https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.bundle.js"></script>
            {/* <button onClick={handleClick}  type="button" id="theme-toggle" class="px-5  text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors">
                Save
            </button> */}
    </div>
</div>
        </main>
    );
}
export default ContactDetails