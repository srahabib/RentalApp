import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import HouseCard from "../HouseCard/HouseCard";

const HouseBlock = () => {
  // Sample data for HouseCard instances
  const houseData = [
    {
      title: "Beach House in Alexandria",
      location: "Alexandria, Egypt",
      description: "This sunny and spacious room is for those traveling light...",
    },
    {
      title: "Another House Title",
      location: "Another Location",
      description: "Another description for the house.",
    },
    // Add more data for the remaining HouseCard instances
    {
      title: "Title 3",
      location: "Location 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      location: "Location 4",
      description: "Description 4",
    },
    {
      title: "Title 5",
      location: "Location 5",
      description: "Description 5",
    },
    {
      title: "Title 6",
      location: "Location 6",
      description: "Description 6",
    },
  ];

  return (
    <div className="bg-white">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          {/* Left lg:w-2/3 if we want the Advertisement back */}
          <div className="flex-shrink max-w-full w-full lg:w-full overflow-hidden">
            {/* Title */}
            <div className="w-full py-3">
              <h2 className="text-gray-800 text-2xl font-bold">
                <span className="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
                Europe
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {/* Map over the houseData array to create HouseCard instances */}
              {houseData.map((house, index) => (
                <HouseCard key={index} title={house.title} location={house.location} description={house.description} />
              ))}
            </div>
          </div>
          {/* Right */}
          {/* <Advertisement /> */}
        </div>
      </div>
    </div>
  );
};

export default HouseBlock;

