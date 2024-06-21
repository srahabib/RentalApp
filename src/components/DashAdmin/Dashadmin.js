import React from 'react';
import PieChart from '../DashAdminPieChart';
import LineChart from '../BarChart';
import CategoryTable from '../DashAdminCategory/CategoryTable';


const data = {
  labels: ['owners', 'website'],
  values: [2100, 1520]
};








const sampleData = {
  labels: ['mohamed ali','mona nady', 'omar samir', 'ali adnan', 'ashraf sayed', 'hady samy', 'aser kareem', 'loay omar', 'seif ahmed', 'noha nady'],
  datasets: [
    {
      label: 'Profit',
      data: [20000, 50000, 30000, 35000, 40000, 25000, 50000, 55000, 60000, 30000],
      backgroundColor: [
        'rgb(255, 179, 150)',
        'rgb(214, 219, 245)',
        'rgb(204, 255, 144)',
        'rgb(255, 138, 128)',
        'rgb(255, 204, 128)',
        'rgb(188, 170, 164)',
        'rgb(171, 250, 255)',
        'rgb(235, 229, 177)',
        'rgb(179, 204, 255)',
        'rgb(67, 104, 80)',
      ],
    },
  ],
  annotations: {
    low: { profit: 1500 },
    high: { profit: 4000 },
  },
};







const Dashboard = () => {
  

    return (
        <>
        <main className="p-6 sm:p-10 space-y-6">
        
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
          </div>
        </div>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-green1 rounded-full mr-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>          
        </div>
        <div>
          <span className="block text-2xl font-bold">989</span>
          <span className="block text-gray-500">Number of Owners</span>
        </div>
      </div>
      <div className="flex items-center p-8 bg-white shadow rounded-lg">
      <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-green1 rounded-full mr-6">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>          
      </div>
      <div>
        <span className="block text-2xl font-bold">3620</span>
        <span className="block text-gray-500">Number of users</span>
      </div>
    </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-green1 rounded-full mr-6">
            <svg class="w-10 h-10 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
</svg>

          </div>
          <div>
        <span className="block text-2xl font-bold">1256</span>
        <span className="block text-gray-500">Number of Properties</span>
      </div>
            </div>
            
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-green1 rounded-full mr-6">
            <svg class="w-10 h-10 text-wight dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.6 16.733c.234.269.548.456.895.534a1.4 1.4 0 0 0 1.75-.762c.172-.615-.446-1.287-1.242-1.481-.796-.194-1.41-.861-1.241-1.481a1.4 1.4 0 0 1 1.75-.762c.343.077.654.26.888.524m-1.358 4.017v.617m0-5.939v.725M4 15v4m3-6v6M6 8.5 10.5 5 14 7.5 18 4m0 0h-3.5M18 4v3m2 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>
</svg>

          </div>
          <div>
        <span className="block text-2xl font-bold">60000</span>
        <span className="block text-gray-500">Average Profits</span>
      </div>
            </div>

        </section>




        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          
          <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <div className="px-6 py-5 font-semibold border-b border-gray-100 font-bold text-xl">top 10 Owners Profits</div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
              
    
            
                <LineChart data={sampleData} />
                  
      








              





              
              
              
              
              
              
              </div>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-blue-100 rounded-full mr-6">
            <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

            </div>
            <div>
              <span className="block text-2xl font-bold">seif ahmed</span>
              <span className="block text-gray-500">Highest Profit</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-red-100 rounded-full mr-6">
            <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

            </div>
            <div>
              <span className="block text-2xl font-bold">mohamed ali</span>
              <span className="block text-gray-500">Lowest Profit</span>
            </div>
          </div>





          <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100 font-bold text-l">rents through the website or personally with the owner</div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center  w-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
            
            <div id="pieChartContainer" className="w-full h-full">
            <PieChart data={data} />
            </div>
            
            
            
            </div>
            





          






          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>

            </div>
            <div>
              <span className="block text-2xl font-bold">65%</span>
              <span className="block text-gray-500">Rents through owners personally</span>
            </div>
          </div>








          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>

            </div>
            <div>
              <span className="block text-2xl font-bold">45%</span>
              <span className="block text-gray-500">Rents through the website</span>
            </div>
          </div>

        </div>


          <div className="row-span-3 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100 font-bold text-l">
              <span>Accounts: </span>
              <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-l leading-5 font-bold text-gray-500 hover:text-gray-600 " id="options-menu" aria-haspopup="true" aria-expanded="true">
                
                
              </button>
              {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
            </div>
            <div className="overflow-y-auto" style={{maxHeight: '60rem'}}>
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>

                  <span className="text-gray-600">kamal elsayed</span>
                  <span className="ml-auto font-semibold">user</span>
                </li>
                <li className="flex items-center">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">mariam omar</span>
                  <span className="ml-auto font-semibold">owner</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">tamer adel</span>
                  <span className="ml-auto font-semibold">user</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">hazem sherif</span>
                  <span className="ml-auto font-semibold">user</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">abas mohamed</span>
                  <span className="ml-auto font-semibold">owner</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">farida elsayed</span>
                  <span className="ml-auto font-semibold">user</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">jana adel</span>
                  <span className="ml-auto font-semibold">user</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">shaimaa ahmed</span>
                  <span className="ml-auto font-semibold">user</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                <span className="text-gray-600">kareem fady</span>
                <span className="ml-auto font-semibold">owner</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">seif mohamed</span>
                <span className="ml-auto font-semibold">user</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">ahmed ibrahim</span>
                <span className="ml-auto font-semibold">user</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">alaa ghanem</span>
                <span className="ml-auto font-semibold">owner</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">rana adel</span>
                <span className="ml-auto font-semibold">owner</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">hany medhat</span>
                <span className="ml-auto font-semibold">user</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">marawan essam</span>
                <span className="ml-auto font-semibold">user</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">hana mahmoud</span>
                <span className="ml-auto font-semibold">owner</span>
              </li>
                
                
               
              </ul>
            </div>
          </div>
          
        </section>




        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
        <div className="px-6 py-5 font-bold border-b border-gray-100 font-bold text-xl">users that want to be owners</div>
        <div className="p-4 flex-grow">
      

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-2 border-gray-200 rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">User Email</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
                        <th className="px-6 py-3 bg-gray-100 text-left text-xl leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">alaa ghanem</td>
                        <td className="px-6 py-4 whitespace-no-wrap">alaa_ghanem@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Accept</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Refuse</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">hana fathy</td>
                        <td className="px-6 py-4 whitespace-no-wrap">hana_fathy@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Accept</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Refuse</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">rana kamal</td>
                        <td className="px-6 py-4 whitespace-no-wrap">rana_kamal@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Accept</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Refuse</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">ahmed adel</td>
                        <td className="px-6 py-4 whitespace-no-wrap">ahmed_adel@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Accept</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Refuse</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">fawzy mohamed</td>
                        <td className="px-6 py-4 whitespace-no-wrap">fawzy_mohamed@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Accept</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Refuse</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-no-wrap">mariam ibrahim</td>
                        <td className="px-6 py-4 whitespace-no-wrap">mariam ibrahim@gmail.com</td>
                        <td className="px-6 py-4 whitespace-no-wrap">123-456-7890</td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Accept</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Refuse</button>
                        </td>
                    </tr>
                  
                    
                </tbody>
            </table>
        </div>
          
          
          </div>
        </div>
      
  
      
      </main>
      
        </>
    );
};

export default Dashboard;
