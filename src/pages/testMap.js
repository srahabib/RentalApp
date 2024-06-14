import React from "react";
import { useState } from "react";
import SearchLocationInput from "@/components/Map/GooglePlacesApi";
import MapComponent from "@/components/Map/MapComponent";

const testMap = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 31.2001,
    lng: 29.9187,
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SearchLocationInput setSelectedLocation={setSelectedLocation} />
      <MapComponent selectedLocation={selectedLocation} />
    </div>
  );
};

export default testMap;