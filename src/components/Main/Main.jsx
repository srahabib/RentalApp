import React from 'react'
import NewsSection from '../NewsSection/NewsSection'
//import Advertisement from '../Advertisement/Advertisement'
import HouseBlock from '../HouseBlock/HouseBlock'
import NewsBlocks from '../NewsBlocks/NewsBlocks'


const Main = () => {
  return (
    <main id="content">
        {/* <h2 class="text-gray-800 text-2xl font-bold p-3 lg:container mx-auto px-3 sm:px-4 xl:px-4">
          <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Rentors' favorite
        </h2>
       <NewsSection/> */}

      <HouseBlock/>
{/*   
      <NewsBlocks/> */}
  
      
      <div class="bg-white py-6">
        <div class="lg:container mx-auto px-3 sm:px-4 xl:px-4">
          <div class="flex flex-row flex-wrap">
            {/* <!-- Left add padding here --> */}
            <div class="flex-shrink max-w-full w-full overflow-hidden">
              <div class="w-full py-3">
                <h2 class="text-gray-800 text-2xl font-bold">
                  <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Advertisement 
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                <div class="flex-shrink max-w-full w-full px-3 pb-5">
                  <div class="relative hover-img max-h-80 overflow-hidden ">
                    {/* <!--thumbnail--> */}
                    <a href="#">
                      <img class="max-w-full w-full mx-auto h-96 opacity-75  " src="/images/ads.jpg" alt="Image description"/>
                    </a>
                    <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      {/* <!--title--> */}
                      <a href="#">
                        <h2 class="text-3xl font-bold capitalize text-white mb-3">Discover the Magic of Egypt , unforgettable Holidays in the Land of Pharaohs! </h2>
                      </a>
                      <p class="text-white hidden sm:inline-block">Immerse yourself in the rich tapestry of history, culture, and breathtaking landscapes. Explore the bustling bazaars of Cairo, cruise the majestic Nile River, and relax in luxurious resorts by the Mediterranean and Red Sea. Discover the magic of Egypt, the ultimate destination for an unforgettable holiday.</p>                                                  
                      {/* <!-- author and date --> */}
                      <div class="pt-2">
                        <div class="text-gray-100"><div class="inline-block h-3 border-l-2 border-amber-600 mr-2"></div>Cairo</div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              
              </div>
            </div>
            
            {/* <!-- right --> */}
            {/* <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
              <div class="w-full bg-white">
                <div class="mb-6">
                  <div class="p-4 bg-gray-100">
                    <h2 class="text-lg font-bold">Most Popular</h2>
                  </div>
                  <ul class="post-number">
                    <li class="border-b border-gray-100 hover:bg-gray-50">
                      <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Why the world would end without political polls</a>
                    </li>
                    <li class="border-b border-gray-100 hover:bg-gray-50">
                      <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Meet The Man Who Designed The Ducati Monster</a>
                    </li>
                    <li class="border-b border-gray-100 hover:bg-gray-50">
                      <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">2020 Audi R8 Spyder spy shots release</a>
                    </li>
                    <li class="border-b border-gray-100 hover:bg-gray-50">
                      <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">Lamborghini makes Huracán GT3 racer faster for 2019</a>
                    </li>
                    <li class="border-b border-gray-100 hover:bg-gray-50">
                      <a class="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">ZF plans $14 billion autonomous vehicle push, concept van</a>
                    </li>
                  </ul>
                </div>
              </div> */}
  
              {/* <div class="text-sm py-6 sticky">
                <div class="w-full text-center">
                  <a class="uppercase" href="#">Advertisement</a>
                  <a href="#">
                    <img class="mx-auto" src="/ads/250.jpg" alt="advertisement area"/>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      {/* </div> */}
      <HouseBlock/>
  
    </main>

  )
}

export default Main