import React from 'react'

function Verification() {
  return (
    <div className='p-20 container mx-auto'>
      {/* <!-- Table --> */}
      <div class="flex flex-col">
        <div class="overflow-x-auto rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Submissions
                    </th>
                    <th scope="col" class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Date & Time
                    </th>

                    <th scope="col" class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Document Reference number
                    </th>

                    <th scope="col" class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                      Status
                    </th>

                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800">
                  <tr>
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Bonnie Green</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 23 ,2021
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0047568936
                    </td>
                    <td class="p-4 whitespace-nowrap">
                      <span
                        class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Accepted </span>
                    </td>

                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Leo </span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 23 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0078568936
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Accepted</span>
                    </td>

                  </tr>
                  <tr>
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Mark Morano</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 18 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0088568934
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <span
                        class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">Rejected</span>
                    </td>

                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Lana Byrd</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 15 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0018568911
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <button type="button" class="text-white text-xs bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 ">
                        Accept
                      </button>
                      <button type="button" class="text-white text-xs bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center ">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Jese Leos</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 15 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0045568939
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Accepted</span>
                    </td>

                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">THEMESBERG LLC</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 11 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0031568935
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <button type="button" class="text-white text-xs bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 ">
                        Accept
                      </button>
                      <button type="button" class="text-white text-xs bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center ">
                        Reject
                      </button>
                    </td>


                  </tr>

                  <tr>
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Lana Lysle</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 6 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0023568934
                    </td>
                    <td class="p-4 whitespace-nowrap">
                      <button type="button" class="text-white text-xs bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 ">
                        Accept
                      </button>
                      <button type="button" class="text-white text-xs bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center ">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Joseph Mcfall</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Apr 1 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0057568935
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Accepted</span>
                    </td>

                  </tr>
                  <tr>
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Alphabet LLC</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Mar 23 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      00836143841
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <button type="button" class="text-white text-xs bg-green-600 hover:bg-green-800 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center me-2 ">
                        Accept
                      </button>
                      <button type="button" class="text-white text-xs bg-red-600 hover:bg-red-800  focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center ">
                        Reject
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-gray-50 dark:bg-gray-700">
                    <td class="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      Submission from <span class="font-semibold">Bonnie Green</span>
                    </td>
                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      Mar 23 ,2021
                    </td>

                    <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                      0031568935
                    </td>

                    <td class="p-4 whitespace-nowrap">
                      <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">Accepted</span>
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Card Footer --> */}
      <div class="flex items-center justify-between pt-3 sm:pt-6">
        <div>
          <button class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">Last 7 days <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
          {/* <!-- Dropdown menu --> */}
          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="transactions-dropdown">
            <div class="px-4 py-3" role="none">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                Sep 16, 2021 - Sep 22, 2021
              </p>
            </div>
            <ul class="py-1" role="none">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
              </li>
            </ul>
            <div class="py-1" role="none">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="#" class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
            Back to Dashboard
            <svg class="w-4 h-4 ml-1 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Verification
