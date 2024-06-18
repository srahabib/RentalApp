import React, { useState, useEffect } from "react";
import HouseCard from "../HouseCard/HouseCard";

const HouseBlock = () => {
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [housesPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof window !== 'undefined') {
          // Get the current URL search parameters
          const searchParams = new URLSearchParams(window.location.search);

          // Construct the API URL with the search parameters
          const apiUrl = `https://rentor-b.onrender.com/property/all?${searchParams.toString()}`;

          console.log(apiUrl)

          const res = await fetch(apiUrl);
          const data = await res.json();
          console.log(data)
          setHouseData(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [typeof window !== 'undefined' ? window.location.search : null]); // Refresh when the search URL changes

  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = houseData.slice(indexOfFirstHouse, indexOfLastHouse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(houseData.length / housesPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && !houseData.length) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className="bg-white">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-full overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {currentHouses.map((house) => (
                <HouseCard
                  key={house.id}
                  id={house.id}
                  title={house.title}
                  city={house.city}
                  description={house.description}
                  imageUrl={house.imageUrl}
                  price={house.price}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="pagination flex justify-center">
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link font-weight-700 ${
                      currentPage === index + 1 ? "text-yellow-600" : ""
                    } block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HouseBlock;
