import React from 'react';
import Recommended from '../../components/Recommended/Recommended';
import Sliders from '../../components/Slider/Slider';
import Reviews from '../../components/Reviews/Reviews';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const PropertyDetails = ({ property }) => {

  const router = useRouter();

  const handleChatRedirect = () => {
    router.push('/Chat'); // Replace '/target-page' with the path to the desired page
  };

  const handleRentRedirect = () => {
    router.push({
      pathname: '/Checkout',
      query: { price: property.price, propertyId: property.id } // Replace '/Checkout' with the path to your checkout page
    });
  };


  if (!property) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(property.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <Sliders />
      {/* <HostCard /> */}
      <div className="bg-gray-100 pt-10 dark:bg-gray-800 transition-colors duration-300">
        <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300" />
        <div className="container mx-auto p-4">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {property.title}
            </h1>
            <p>
              <span className="inline-flex items-center text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-green2"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                {property.street_address} , {property.city}

              </span>
            </p>

            <div className=" p-6 dark:bg-gray-800 relative ">
              <div className=" absolute top-0 right-0 flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
                <img src="/images/Host.jpg" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                  <div className="my-2 space-y-1">
                    <h2 className="text-xl font-semibold sm:text-2xl">Amira Mohamed </h2>
                    <p className="px-5 text-xs sm:text-base dark:text-gray-600">Mother of two, I love pets</p>
                  </div>
                  <div className="flex justify-center pt-2 space-x-4 align-center">
                    <Button className="mt-2 bg-green2 bg-green2 text-white font-bold hover:bg-grey1 focus:ring-4 focus:outline-none focus:ring-grey1 focus:bg-bej1 focus:text-black" onClick={handleRentRedirect}> Rent Property </Button>
                    <Button className="mt-2 bg-green2 bg-green2 text-white font-bold hover:bg-grey1 focus:ring-4 focus:outline-none focus:ring-grey1 focus:bg-bej1 focus:text-black" onClick={handleChatRedirect} >Message

                      <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 text-gray-900 mt-10 dark:text-gray-100">
              General Information
            </h2>
            <div className="text-gray-500">
              <dl>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">
                    Published Date
                  </dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {formattedDate}
                  </dd>
                </div>
                <div className="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Price</dt>
                  <dd className="mt-1 text-lg font-bold text-red-500 sm:mt-0 sm:col-span-2">
                    {property.price}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Floor:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.floor_location}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Housing Type:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.type}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Rooms:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.num_rooms}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Bath Rooms:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.num_bath_rooms}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Gross / Net M²:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.area}M²
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300" />
        <div className="container mx-auto p-4">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Description</h1>
            <p className="text-gray-500 text-xl">{property.description}</p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300" />
        {/* <div className="container mx-auto p-4">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Internal & External Features
            </h1>
          </div>
          <Reviews />
        </div> */}

        <div className="container mx-auto p-4">
          <Reviews />
        </div>

        <div className="p-5">
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://rentor-b.onrender.com/property/single/${params.id}`);
  const property = await res.json();

  return {
    props: { property },
  };
}

export default PropertyDetails;
