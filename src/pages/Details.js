import React from 'react';
import Recommended from '../components/Recommended/Recommended';
import Sliders from '../components/Slider/Slider';
import HostCard from '@/components/HostCard/HostCard';
import Reviews from '@/components/Reviews/Reviews';


const Details = () => {

    return (

        <div>
            <Sliders />
            <HostCard />
            <div class="bg-gray-100 pt-10 dark:bg-gray-800 transition-colors duration-300">

                <div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
                <div className="container mx-auto p-4">
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h1 className="text-xl  font-semibold text-gray-900 dark:text-gray-100">Family House For Rent</h1>


                        <p>
                            <span class="inline-flex items-center text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="currentColor" class="w-6 h-6  text-amber-600">
                                    <path fill-rule="evenodd"
                                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                </svg>
                                Louran , Alexandria
                            </span>
                        </p>

                        <h2 class="text-xl font-semibold mb-4 text-gray-900 mt-10 dark:text-gray-100">General Information</h2>
                        <div class="text-gray-500">

                            <dl>

                                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                                    <dt class="text-lg font-medium text-gray-500">
                                        published Date
                                    </dt>
                                    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                                        2nd March 2024
                                    </dd>
                                </div>
                                <div class="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                                    <dt class="text-lg font-medium text-gray-500">
                                        Price Range
                                    </dt>
                                    <dd class="mt-1 text-lg font-bold text-red-500 sm:mt-0 sm:col-span-2">
                                        400
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                                    <dt class="text-lg font-medium text-gray-500">
                                        Advertise Status  :
                                    </dt>
                                    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                                        Sale
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                                    <dt class="text-lg font-medium text-gray-500">
                                        Housing Type  :
                                    </dt>
                                    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                                        Apartment
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                                    <dt class="text-lg font-medium text-gray-500">
                                        Rooms  :
                                    </dt>
                                    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                                        4
                                    </dd>
                                </div>
                                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                                    <dt class="text-lg font-medium text-gray-500">
                                        Gross / Net M²:
                                    </dt>
                                    <dd class="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                                        150M² / 135M²
                                    </dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
                <div className="container mx-auto p-4">
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Description</h1>
                        <p class="text-gray-500 text-xl">This sunny and spacious room is for those traveling light and looking for a comfy
                            and cosy place to lay their head for a night or two. This beach house sits
                            in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets
                            and is close to all the major attractions such as Edinburgh Castle and Arthur Seat.
                        </p>

                    </div>
                </div>

                <div className="bg-gray-100  dark:bg-gray-800 transition-colors duration-300" />
                <div className="container mx-auto p-4">
                    <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
                        <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Internal & External Features</h1>


                        <div class="grid grid-cols-2 gap-4">
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Security
                                </span>
                            </p>
                            </div>
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Elevator
                                </span>
                            </p></div>

                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Alarm
                                </span>
                            </p>
                            </div>
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    ADSL
                                </span>
                            </p></div>

                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Laundry Room
                                </span>
                            </p>
                            </div>
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Dressing Room
                                </span>
                            </p></div> <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Balacony
                                </span>
                            </p>
                            </div>
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Sauna
                                </span>
                            </p></div> <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Fitness
                                </span>
                            </p>
                            </div>
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Market
                                </span>
                            </p></div> <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Generator
                                </span>
                            </p>
                            </div>
                            <div><p>
                                <span class="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Car Park
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto p-4">
                    <Reviews />
                </div>

                <div className="p-5">
                    <Recommended />
                </div>
            </div>
        </div>
    );
}

export default Details;