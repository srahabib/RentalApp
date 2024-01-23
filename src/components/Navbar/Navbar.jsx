import React from 'react';
import Logo from './Logo';

const Navbar = () => {

    const showNav = () => {
        console.log("clicked");
        const nav = document.getElementById("navbarSupportedContent13");
        nav.classList.toggle("hidden");

        
    }


    return (

<section>
<nav
    class=" p-2 lg:p-20 relative flex w-full flex-nowrap items-center justify-between bg-white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-3">
        <button onClick={showNav} data-collapse-toggle="navbar-solid-bg"
        class=" block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContent13"
        aria-controls="navbarSupportedContent13"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="[&>svg]:w-7">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7">
            <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
        </span>
        </button>

        <div
        class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent13"
        data-te-collapse-item>
        <div class="ml-2">
            <a
            class="text-xl text-neutral-800 dark:text-neutral-200"
            href="#"
            ></a
            >
        </div>
        <ul
            class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
            data-te-navbar-nav-ref>
            <li
            class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1"
            data-te-nav-item-ref>
            <a
                class="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                aria-current="page"
                href="#"
                data-te-nav-link-ref
                >
                    

                </a>
            
            </li>

            <img className="hidden lg:block w-5 h-5" src="/images/rentorLogo4.svg" alt="" />
            <li
            class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
            data-te-nav-item-ref>
            <a
                class=" pl-0 lg:pl-5 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="#"
                data-te-nav-link-ref
                >Home</a
            >
            </li>
            <li
            class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
            data-te-nav-link-ref>
            <a
                class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >Apartments</a
            >
            </li>
            <li
            class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
            data-te-nav-link-ref>
            <a
                class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >Contact</a
            >
            </li>
            <li
            class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
            data-te-nav-link-ref>
            <a
                class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                >About</a
            >
            </li>
        </ul>
        <div class="w-[300px] lg:pr-2">
            <div class="relative flex w-full flex-wrap items-stretch">
            <input
                type="search"
                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3" />

            <button
                class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none"
                type="button"
                id="button-addon3"
                data-te-ripple-init>
                Search
            </button>
            </div>
        </div>
        </div>
    </div>
</nav>

    </section>

    );
    };

export default Navbar;