import React, { useState, useEffect } from "react";
import HouseCard from "../HouseCard/HouseCard";

const HouseBlock = () => {
  const [houseData, setHouseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://rentor-b.onrender.com/property/all");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setHouseData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white">
      <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
          <div className="flex-shrink max-w-full w-full lg:w-full overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {houseData.slice(0, 6).map((house) => (
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
      </div>
    </div>
  );
};

export default HouseBlock;
