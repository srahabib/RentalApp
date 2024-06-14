import React from 'react';
import PieChart from '../PieChart';
import LineChart from '../LineChart';



const data = {
  labels: ['Summer', 'Winter', 'Autumn', 'Spring'],
  values: [15, 4, 9, 7]
};



const sampleData = {
  labels: ['December','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sebtember', 'October', 'November'],
  datasets: [
    {
      label: 'Profit',
      data: [5000, 7000, 8000, 10000, 20000, 25000, 50000, 55000, 60000, 30000, 40000, 45000],
      fill: false,
      borderColor: 'rgb(255, 179, 0)',
      tension: 0.1,
    },
  ],
  annotations: {
    low: { month: 'March', profit: 1500 },
    high: { month: 'June', profit: 4000 },
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
            <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-amber-600 rounded-full mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          
            </div>
            <div>
              <span className="block text-2xl font-bold">6</span>
              <span className="block text-gray-500">Profile Visits</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-amber-600 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">60000</span>
              <span className="block text-gray-500">Average Profits</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-amber-600 rounded-full mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            
            </div>
            <div>
              <span className="inline-block text-2xl font-bold">36</span>
              <span className="block text-gray-500">Rental Times</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-20 w-20 text-white bg-amber-600 rounded-full mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>          
            </div>
            <div>
              <span className="block text-2xl font-bold">83%</span>
              <span className="block text-gray-500">Peoples Satisfaction</span>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          
          <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
            <div className="px-6 py-5 font-semibold border-b border-gray-100 font-bold text-xl">Profits</div>
            <div className="p-4 flex-grow">
              <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
              
              
 


            
              
              
              
                
            
                <LineChart data={sampleData} />
                  
                
              
            
               














              





              
              
              
              
              
              
              </div>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg
            viewBox="0 0 30 30"
            fill="currentColor"
            height="5em"
            width="5em"
      
          >
            <path d="M1.52 16.9c0 1.11.33 2.09.98 2.96s1.51 1.46 2.57 1.78l-.64 1.7c-.04.14 0 .21.14.21H6.7L5.45 27.5h.29l4.17-5.39c.04-.04.04-.09.01-.14-.02-.05-.07-.07-.14-.07H7.61l2.47-4.63c.07-.14.02-.22-.14-.22H7c-.09 0-.17.05-.23.14L5.7 20.07c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17s1.27-.97 2.1-1.07l.52-.06c.13 0 .2-.06.2-.18l.06-.51c.11-1.08.57-1.99 1.38-2.72a4.15 4.15 0 012.86-1.1c1.09 0 2.04.37 2.85 1.1s1.28 1.64 1.4 2.72l.06.58c0 .11.06.17.18.17h1.61c.91 0 1.68.32 2.32.95.64.63.96 1.39.96 2.29 0 .85-.3 1.59-.89 2.21-.59.62-1.32.97-2.19 1.04-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17 1.33-.04 2.46-.55 3.39-1.51.93-.96 1.39-2.11 1.39-3.45 0-.74-.14-1.41-.43-2.01.79-.96 1.18-2.06 1.18-3.32 0-.94-.24-1.81-.71-2.62a5.201 5.201 0 00-1.92-1.92c-.81-.47-1.68-.71-2.62-.71-1.54 0-2.84.58-3.88 1.73-.81-.43-1.71-.65-2.7-.65-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.73 1.73s-1.09 1.94-1.09 3.09zm8.09 9.58c-.01.15.03.3.14.44s.26.25.46.33c.07.02.14.03.21.03.17 0 .34-.05.51-.15s.28-.26.34-.47l2.29-8.57a.83.83 0 00-.07-.64.815.815 0 00-.49-.4.777.777 0 00-.65.07c-.2.11-.34.28-.4.51l-2.31 8.6c-.02.07-.03.16-.03.25zm.33-21.85c0 .24.08.43.25.59l.64.66c.17.17.37.25.61.26.24 0 .43-.08.57-.26.19-.15.28-.35.28-.6 0-.24-.08-.43-.25-.59l-.63-.66a.87.87 0 00-.61-.24c-.25 0-.46.08-.62.24-.16.16-.24.36-.24.6zm3.83 18.8c0 .12.04.24.11.38.13.2.29.34.5.43.07.03.17.05.3.05.15 0 .26-.02.33-.06.2-.08.34-.28.41-.58l1.49-5.55c.06-.24.04-.45-.07-.65a.848.848 0 00-.51-.39.751.751 0 00-.64.07.78.78 0 00-.39.51l-1.5 5.56c0 .02-.01.06-.02.11-.01.06-.01.09-.01.12zM15.3 9.04c.67-.64 1.49-.97 2.48-.97.97 0 1.81.34 2.5 1.02.69.68 1.04 1.51 1.04 2.48 0 .62-.17 1.24-.52 1.85-.99-.98-2.16-1.47-3.5-1.47h-.31c-.31-1.17-.88-2.14-1.69-2.91zm1.61-5.25c0 .23.09.43.26.6s.37.26.6.26c.24 0 .43-.08.59-.25.16-.17.23-.37.23-.61V1.73c0-.24-.08-.44-.23-.61s-.35-.25-.59-.25c-.23 0-.43.08-.6.25s-.26.37-.26.61v2.06zm5.53 2.28c0 .24.09.44.26.6.14.17.33.25.57.25s.44-.08.6-.25l1.44-1.45c.17-.16.26-.35.26-.59s-.08-.44-.25-.61a.822.822 0 00-.61-.25c-.22 0-.41.09-.57.26L22.7 5.47c-.17.16-.26.36-.26.6zm.81 11.86c0 .22.08.42.24.6l.66.63c.12.14.31.23.54.24l.01.01h.1c.19 0 .36-.09.53-.26.17-.16.26-.36.26-.6 0-.23-.09-.43-.26-.61l-.65-.61a.759.759 0 00-.58-.27c-.23 0-.43.08-.6.25-.17.18-.25.39-.25.62zm1.45-6.35c0 .23.09.43.27.6.18.18.38.27.61.27h2.03c.23 0 .43-.09.6-.26s.26-.38.26-.61c0-.23-.08-.43-.25-.59a.853.853 0 00-.61-.24h-2.03c-.25 0-.46.08-.63.24-.17.16-.25.36-.25.59z" />
          </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">December</span>
              <span className="block text-gray-500">Lower Profit</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg
            viewBox="0 0 30 30"
            fill="currentColor"
            height="5em"
            width="5em"
          >
            <path d="M4.37 14.62c0-.24.08-.45.25-.62.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25.15.17.23.37.23.61s-.07.44-.22.61c-.15.17-.35.25-.58.25H5.23c-.23 0-.43-.08-.6-.25a.832.832 0 01-.26-.61zm2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23.24.34.24.57c0 .24-.08.46-.24.64L8.7 22.14c-.41.32-.82.32-1.23 0a.807.807 0 01-.24-.59zm0-13.84c0-.23.08-.43.23-.61.2-.17.41-.25.64-.25.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59s-.08.44-.24.6-.36.24-.6.24-.44-.08-.59-.24L7.47 8.32a.837.837 0 01-.24-.61zm2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91 1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42.64.28 1.2.65 1.66 1.12.47.47.84 1.02 1.11 1.66.27.64.41 1.32.41 2.02 0 .94-.23 1.81-.7 2.61-.47.8-1.1 1.43-1.9 1.9-.8.47-1.67.7-2.61.7s-1.81-.23-2.61-.7c-.8-.47-1.43-1.1-1.9-1.9-.45-.81-.69-1.68-.69-2.62zm1.7 0c0 .98.34 1.81 1.03 2.5.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04 1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47-.69-.68-1.52-1.02-2.5-1.02-.97 0-1.8.34-2.48 1.02-.7.69-1.04 1.51-1.04 2.47zm2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62-.17.17-.37.25-.6.25s-.44-.08-.6-.25a.845.845 0 01-.25-.62V22.4zm0-15.5V4.86c0-.23.08-.43.25-.6.17-.17.37-.26.61-.26s.43.08.6.25c.17.17.25.37.25.6V6.9c0 .23-.08.42-.25.58s-.37.23-.6.23-.44-.08-.6-.23-.26-.35-.26-.58zm5.52 13.18c0-.23.08-.42.23-.56.15-.16.34-.23.56-.23.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61 0 .23-.08.43-.24.59-.4.31-.8.31-1.2 0l-1.42-1.42a.974.974 0 01-.23-.65zm0-10.92c0-.25.08-.45.23-.59l1.42-1.47a.84.84 0 01.59-.24c.24 0 .44.08.6.25.17.17.25.37.25.6 0 .25-.08.46-.24.62l-1.46 1.43c-.18.16-.38.24-.6.24-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6zm2.26 5.46c0-.24.08-.44.24-.62.16-.16.35-.24.57-.24h2.02c.23 0 .43.09.6.26.17.17.26.37.26.6s-.09.43-.26.6c-.17.17-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6z" />
          </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">August</span>
              <span className="block text-gray-500">Higher Profit</span>
            </div>
          </div>





          <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100 font-bold text-l">Number of Rents through the Seasons of the Year</div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center  w-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
            
            <div id="pieChartContainer" className="w-full h-full">
            <PieChart data={data} />
            </div>
            
            
            
            </div>
            





          






          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg
            viewBox="0 0 30 30"
            fill="currentColor"
            height="5em"
            width="5em"
      
          >
            <path d="M1.52 16.9c0 1.11.33 2.09.98 2.96s1.51 1.46 2.57 1.78l-.64 1.7c-.04.14 0 .21.14.21H6.7L5.45 27.5h.29l4.17-5.39c.04-.04.04-.09.01-.14-.02-.05-.07-.07-.14-.07H7.61l2.47-4.63c.07-.14.02-.22-.14-.22H7c-.09 0-.17.05-.23.14L5.7 20.07c-.71-.18-1.3-.57-1.77-1.16s-.7-1.26-.7-2.01c0-.83.28-1.55.85-2.17s1.27-.97 2.1-1.07l.52-.06c.13 0 .2-.06.2-.18l.06-.51c.11-1.08.57-1.99 1.38-2.72a4.15 4.15 0 012.86-1.1c1.09 0 2.04.37 2.85 1.1s1.28 1.64 1.4 2.72l.06.58c0 .11.06.17.18.17h1.61c.91 0 1.68.32 2.32.95.64.63.96 1.39.96 2.29 0 .85-.3 1.59-.89 2.21-.59.62-1.32.97-2.19 1.04-.13 0-.2.06-.2.18v1.37c0 .11.07.17.2.17 1.33-.04 2.46-.55 3.39-1.51.93-.96 1.39-2.11 1.39-3.45 0-.74-.14-1.41-.43-2.01.79-.96 1.18-2.06 1.18-3.32 0-.94-.24-1.81-.71-2.62a5.201 5.201 0 00-1.92-1.92c-.81-.47-1.68-.71-2.62-.71-1.54 0-2.84.58-3.88 1.73-.81-.43-1.71-.65-2.7-.65-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.1 3.36c-1.11.26-2.02.83-2.73 1.73s-1.09 1.94-1.09 3.09zm8.09 9.58c-.01.15.03.3.14.44s.26.25.46.33c.07.02.14.03.21.03.17 0 .34-.05.51-.15s.28-.26.34-.47l2.29-8.57a.83.83 0 00-.07-.64.815.815 0 00-.49-.4.777.777 0 00-.65.07c-.2.11-.34.28-.4.51l-2.31 8.6c-.02.07-.03.16-.03.25zm.33-21.85c0 .24.08.43.25.59l.64.66c.17.17.37.25.61.26.24 0 .43-.08.57-.26.19-.15.28-.35.28-.6 0-.24-.08-.43-.25-.59l-.63-.66a.87.87 0 00-.61-.24c-.25 0-.46.08-.62.24-.16.16-.24.36-.24.6zm3.83 18.8c0 .12.04.24.11.38.13.2.29.34.5.43.07.03.17.05.3.05.15 0 .26-.02.33-.06.2-.08.34-.28.41-.58l1.49-5.55c.06-.24.04-.45-.07-.65a.848.848 0 00-.51-.39.751.751 0 00-.64.07.78.78 0 00-.39.51l-1.5 5.56c0 .02-.01.06-.02.11-.01.06-.01.09-.01.12zM15.3 9.04c.67-.64 1.49-.97 2.48-.97.97 0 1.81.34 2.5 1.02.69.68 1.04 1.51 1.04 2.48 0 .62-.17 1.24-.52 1.85-.99-.98-2.16-1.47-3.5-1.47h-.31c-.31-1.17-.88-2.14-1.69-2.91zm1.61-5.25c0 .23.09.43.26.6s.37.26.6.26c.24 0 .43-.08.59-.25.16-.17.23-.37.23-.61V1.73c0-.24-.08-.44-.23-.61s-.35-.25-.59-.25c-.23 0-.43.08-.6.25s-.26.37-.26.61v2.06zm5.53 2.28c0 .24.09.44.26.6.14.17.33.25.57.25s.44-.08.6-.25l1.44-1.45c.17-.16.26-.35.26-.59s-.08-.44-.25-.61a.822.822 0 00-.61-.25c-.22 0-.41.09-.57.26L22.7 5.47c-.17.16-.26.36-.26.6zm.81 11.86c0 .22.08.42.24.6l.66.63c.12.14.31.23.54.24l.01.01h.1c.19 0 .36-.09.53-.26.17-.16.26-.36.26-.6 0-.23-.09-.43-.26-.61l-.65-.61a.759.759 0 00-.58-.27c-.23 0-.43.08-.6.25-.17.18-.25.39-.25.62zm1.45-6.35c0 .23.09.43.27.6.18.18.38.27.61.27h2.03c.23 0 .43-.09.6-.26s.26-.38.26-.61c0-.23-.08-.43-.25-.59a.853.853 0 00-.61-.24h-2.03c-.25 0-.46.08-.63.24-.17.16-.25.36-.25.59z" />
          </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">Winter</span>
              <span className="block text-gray-500">Lower Number of Rents</span>
            </div>
          </div>








          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg
            viewBox="0 0 30 30"
            fill="currentColor"
            height="5em"
            width="5em"
          >
            <path d="M4.37 14.62c0-.24.08-.45.25-.62.17-.16.38-.24.6-.24h2.04c.23 0 .42.08.58.25.15.17.23.37.23.61s-.07.44-.22.61c-.15.17-.35.25-.58.25H5.23c-.23 0-.43-.08-.6-.25a.832.832 0 01-.26-.61zm2.86 6.93c0-.23.08-.43.23-.61l1.47-1.43c.15-.16.35-.23.59-.23s.44.08.6.23.24.34.24.57c0 .24-.08.46-.24.64L8.7 22.14c-.41.32-.82.32-1.23 0a.807.807 0 01-.24-.59zm0-13.84c0-.23.08-.43.23-.61.2-.17.41-.25.64-.25.22 0 .42.08.59.24l1.43 1.47c.16.15.24.35.24.59s-.08.44-.24.6-.36.24-.6.24-.44-.08-.59-.24L7.47 8.32a.837.837 0 01-.24-.61zm2.55 6.91c0-.93.23-1.8.7-2.6s1.1-1.44 1.91-1.91 1.67-.7 2.6-.7c.7 0 1.37.14 2.02.42.64.28 1.2.65 1.66 1.12.47.47.84 1.02 1.11 1.66.27.64.41 1.32.41 2.02 0 .94-.23 1.81-.7 2.61-.47.8-1.1 1.43-1.9 1.9-.8.47-1.67.7-2.61.7s-1.81-.23-2.61-.7c-.8-.47-1.43-1.1-1.9-1.9-.45-.81-.69-1.68-.69-2.62zm1.7 0c0 .98.34 1.81 1.03 2.5.68.69 1.51 1.04 2.49 1.04s1.81-.35 2.5-1.04 1.04-1.52 1.04-2.5c0-.96-.35-1.78-1.04-2.47-.69-.68-1.52-1.02-2.5-1.02-.97 0-1.8.34-2.48 1.02-.7.69-1.04 1.51-1.04 2.47zm2.66 7.78c0-.24.08-.44.25-.6s.37-.24.6-.24c.24 0 .45.08.61.24s.24.36.24.6v1.99c0 .24-.08.45-.25.62-.17.17-.37.25-.6.25s-.44-.08-.6-.25a.845.845 0 01-.25-.62V22.4zm0-15.5V4.86c0-.23.08-.43.25-.6.17-.17.37-.26.61-.26s.43.08.6.25c.17.17.25.37.25.6V6.9c0 .23-.08.42-.25.58s-.37.23-.6.23-.44-.08-.6-.23-.26-.35-.26-.58zm5.52 13.18c0-.23.08-.42.23-.56.15-.16.34-.23.56-.23.24 0 .44.08.6.23l1.46 1.43c.16.17.24.38.24.61 0 .23-.08.43-.24.59-.4.31-.8.31-1.2 0l-1.42-1.42a.974.974 0 01-.23-.65zm0-10.92c0-.25.08-.45.23-.59l1.42-1.47a.84.84 0 01.59-.24c.24 0 .44.08.6.25.17.17.25.37.25.6 0 .25-.08.46-.24.62l-1.46 1.43c-.18.16-.38.24-.6.24-.23 0-.41-.08-.56-.24s-.23-.36-.23-.6zm2.26 5.46c0-.24.08-.44.24-.62.16-.16.35-.24.57-.24h2.02c.23 0 .43.09.6.26.17.17.26.37.26.6s-.09.43-.26.6c-.17.17-.37.25-.6.25h-2.02c-.23 0-.43-.08-.58-.25s-.23-.36-.23-.6z" />
          </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">Summer</span>
              <span className="block text-gray-500">Higher Number of Rents</span>
            </div>
          </div>

        </div>


          <div className="row-span-3 bg-white shadow rounded-lg">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100 font-bold text-l">
              <span>peoples who Rent: </span>
              <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-l leading-5 font-bold text-gray-500 hover:text-gray-600 " id="options-menu" aria-haspopup="true" aria-expanded="true">
                Number of Rents
                <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
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
                  <span className="ml-auto font-semibold">2</span>
                </li>
                <li className="flex items-center">
                  <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">mariam omar</span>
                  <span className="ml-auto font-semibold">3</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">tamer adel</span>
                  <span className="ml-auto font-semibold">1</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">hazem sherif</span>
                  <span className="ml-auto font-semibold">2</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">abas mohamed</span>
                  <span className="ml-auto font-semibold">1</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">farida elsayed</span>
                  <span className="ml-auto font-semibold">3</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">jana adel</span>
                  <span className="ml-auto font-semibold">2</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                  <span className="text-gray-600">shaimaa ahmed</span>
                  <span className="ml-auto font-semibold">1</span>
                </li>
                <li className="flex items-center">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
                <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </div>
                <span className="text-gray-600">kareem fady</span>
                <span className="ml-auto font-semibold">2</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">seif mohamed</span>
                <span className="ml-auto font-semibold">2</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">ahmed ibrahim</span>
                <span className="ml-auto font-semibold">3</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">alaa ghanem</span>
                <span className="ml-auto font-semibold">2</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">rana adel</span>
                <span className="ml-auto font-semibold">1</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">hany medhat</span>
                <span className="ml-auto font-semibold">3</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">marawan essam</span>
                <span className="ml-auto font-semibold">2</span>
              </li>
              <li className="flex items-center">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray bg-gray-100 rounded-full mr-6">
              <svg class="w-10 h-10 text-gray dark:text-gray" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              </div>
                <span className="text-gray-600">hana mahmoud</span>
                <span className="ml-auto font-semibold">1</span>
              </li>
                
                
               
              </ul>
            </div>
          </div>
          
        </section>
       
      </main>
      
        </>
    );
};

export default Dashboard;