// pages/property/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Recommended from '../../components/Recommended/Recommended';
import Sliders from '../../components/Slider/Slider';
import HostCard from '../../components/HostCard/HostCard';
import Reviews from '../../components/Reviews/Reviews';

const PropertyDetails = ({ property }) => {
  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Sliders />
      <HostCard />
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
                  className="w-6 h-6 text-amber-600"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                {property.location}
              </span>
            </p>

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
                    {property.publishedDate}
                  </dd>
                </div>
                <div className="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Price Range</dt>
                  <dd className="mt-1 text-lg font-bold text-red-500 sm:mt-0 sm:col-span-2">
                    {property.price}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Advertise Status:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.status}
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
                    {property.rooms}
                  </dd>
                </div>
                <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt className="text-lg font-medium text-gray-500">Gross / Net M²:</dt>
                  <dd className="mt-1 text-lg font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {property.grossArea}M² / {property.netArea}M²
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
        <div className="container mx-auto p-4">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Internal & External Features
            </h1>
            <div className="grid grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index}>
                  <p>
                    <span className="inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Reviews />
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
