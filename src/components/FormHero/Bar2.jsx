import React from "react";

const Bar2 = () => {
    return (
        <div className="container">
            <ol class="mx-56 mb-10 pt-10 flex content-center items-center ">
                <li
                    class="flex w-full items-center text-black dark:text-orange-500 after:content-[''] after:w-full after:h-1 after:border-b
                after:border-grey1 after:border-4 after:inline-block dark:after:border-green2"
                >
                    <span class="flex items-center justify-center w-10 h-10 bg-green2 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 bg-green2 "
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </span>
                </li>
                <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-grey1 after:border-4 after:inline-block dark:after:border-green2">
                    <span class="flex items-center justify-center w-10 h-10 bg-green2 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </span>
                </li>
                <li className="flex items-center">
                    <span
                        class="flex items-center justify-center w-10 h-10 bg-gray-100
                    rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                            />
                        </svg>
                    </span>
                </li>
            </ol>
        </div>
    );
};

export default Bar2;
