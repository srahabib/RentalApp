import React, { useState, useEffect } from "react";
import Bar1 from "../components/FormHero/BarAd";
import { useRouter } from "next/router";
import MyGoogleMap from "../components/Map/GoogleMapComponent";
import { images } from "../../next.config";

const PropertyDetails = () => {
  const url = "https://rentor-b.onrender.com/property/add";
  const [clickedLocation, setClickedLocation] = useState(null);
  // const [PhotosCount, setPhotosCount] = useState(0);
  const [val, setVal] = useState([]);

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const handleChange = (onChangeValue, i) => {
    const inputData = [...val];
    inputData[i] = onChangeValue.target.value;
    setVal(inputData);
    setData({ ...data, images: val });
  };

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
    setData({ ...data, images: val });
  };

  const handleMapClick = (latLng) => {
    setClickedLocation(latLng);
    // Do something with the latitude and longitude, such as sending it to the server
    console.log("Clicked location:", latLng);
    setData({
      ...data,
      location: {
        ...data.location,
        latitude: latLng.lat,
        longitude: latLng.lng,
      },
    });
  };

  // const handleImagesUploaded = (newImages) => {
  //   // Update state with the newly uploaded images
  //   setUploadedImages([...uploadedImages, ...newImages]);
  // };

  // const handlePhotosClick = () => {
  //   setPhotosCount((prevCount) => prevCount + 1);
  // };

  const handleImagesUploaded = (newImages) => {
    // Update state with the newly uploaded images
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const router = useRouter();

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    per: "",
    type: "",
    area: "",
    num_rooms: "",
    num_bath_rooms: "",
    floor_location: "",
    street_address: "",
    furnished: true,
    city: "",
    postal_code: "",
    email: "",
    phone: "",
    images: [],
    location: {
      latitude: "",
      longitude: "",
    },
  });

  function submit(e) {
    e.preventDefault();

    router.push({
      pathname: "/view2",
      query: {
        ...data,
        lon: data.location.longitude,
        lat: data.location.latitude,
      },
    });
  }

  function handle(e) {
    const newData = { ...data };
    if (e.target.id === "furnished") {
      // Convert the value to a boolean
      newData[e.target.id] = e.target.value === "true";
    } else {
      // For other inputs, just set the value as it is
      newData[e.target.id] = e.target.value;
    }
    setData(newData);
  }

  return (
    <div
      style={{ backgroundImage: "url('./images/image1.jpg')" }}
      className="bg-fixed	bg-center bg-no-repeat bg-cover"
    >
      <Bar1 />
      <div className="container mx-auto mb-6">
        <form onSubmit={(e) => submit(e)}>
          <div className="mx-auto">
            <div className="general_info bg-white shadow-lg  px-6 pb-12 pt-6 mb-4 rounded-lg ">
              <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-green2 w-40">
                General Information
              </h1>
              <div className=" grid md:grid-cols-4 gap-4 w-full py-5">
                <input
                  onChange={(e) => handle(e)}
                  id="title"
                  value={data.title}
                  type="text"
                  placeholder="Title"
                  className="text-md shadow-md border p-2 rounded-md w-full placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="price"
                  value={data.price}
                  type="text"
                  inputmode="numeric"
                  placeholder="Price"
                  className="text-md shadow-md border p-2 rounded-md w-full placeholder:text-gray-500"
                />
                <select
                  onChange={(e) => handle(e)}
                  id="per"
                  value={data.per}
                  className="shadow-md block text-md text-gray-500 dark:text-gray-500 bg-white border border-gray-300 rounded-md w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled hidden>
                    Per
                  </option>
                  <option value="day">Day</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                <select
                  onChange={(e) => handle(e)}
                  id="type"
                  value={data.type}
                  className="shadow-md block text-md text-gray-500 dark:text-gray-500 bg-white border border-gray-300 rounded-md w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled selected hidden>
                    Type
                  </option>
                  <option value="dublex">Duplex</option>
                  <option value="apartment">Apartment</option>
                  <option value="room">Room</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              <div className="grid md:grid-cols-1 gap-4 w-full">
                <textarea
                  onChange={(e) => handle(e)}
                  id="description"
                  value={data.description}
                  rows={5}
                  name="description"
                  placeholder="Describe The Property"
                  className="text-md p-2 rounded-md shadow-md border placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className="bg-white border-2 rounded-md shadow-md p-6">
              <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-green2 w-40">
                Detailed Information
              </h1>
              <div className="mb-4 grid grid-cols-4 gap-4">
                <input
                  onChange={(e) => handle(e)}
                  id="area"
                  value={data.area}
                  type="text"
                  placeholder="Area (m²)"
                  className="border p-2 rounded text-md shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="num_rooms"
                  value={data.num_rooms}
                  type="text"
                  placeholder="Bedrooms"
                  className=" border p-2 rounded text-md shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="num_bath_rooms"
                  value={data.num_bath_rooms}
                  type="text"
                  placeholder="Bathrooms"
                  className="border p-2 rounded text-md shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="floor_location"
                  value={data.floor_location}
                  type="text"
                  placeholder="Floor"
                  className="border p-2 rounded shadow-md placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold">Furnished</h3>
                <label
                  className="border px-3 py-2 mr-2 shadow-md text-sm"
                  for="furnished-yes"
                >
                  <input
                    onChange={(e) => handle(e)}
                    id="furnished"
                    value={true}
                    type="radio"
                    name="furnished"
                    className="mr-1"
                  />
                  Yes
                </label>

                <label
                  for="furnished-no"
                  className="border px-3 py-2 mr-2 shadow-md text-sm"
                >
                  <input
                    onChange={(e) => handle(e)}
                    id="furnished"
                    value={false}
                    type="radio"
                    name="furnished"
                    className="mr-1"
                  />
                  No
                </label>
              </div>

              <input
                onChange={(e) => handle(e)}
                id="street_address"
                value={data.street_address}
                type="text"
                placeholder="Address"
                className="border p-2 rounded w-full shadow-md mb-4 placeholder:text-gray-500"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  onChange={(e) => handle(e)}
                  id="city"
                  value={data.city}
                  type="text"
                  placeholder="City"
                  className="border p-2 rounded w-full shadow-md placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="postal_code"
                  value={data.postal_code}
                  type="text"
                  placeholder="ZIP / Postal code"
                  className="border p-2 rounded w-full shadow-md placeholder:text-gray-500"
                />
              </div>
              <div className="mb-6">
                <div>
                  <h2 className="mb-3 text-sm font-semibold">
                    Choose the property location{" "}
                  </h2>
                  <MyGoogleMap onMapClick={handleMapClick} />
                  {clickedLocation && (
                    <div>
                      {/* Latitude: {clickedLocation.lat}, Longitude:{" "}
                  {clickedLocation.lng} */}
                    </div>
                  )}
                </div>
                <h2 className="mb-3 mt-4 text-sm font-semibold">
                  Upload property photos{" "}
                </h2>
                {/* <UploadImage onImagesUploaded={handleImagesUploaded} /> */}
                {/* {[...Array(PhotosCount)].map((_, index) => (
              <input
                onChange={(e) => handle(e)}
                id="images"
                value={data.images[index] || ""}
                key={index}
                className="border p-2 mr-2 rounded text-md shadow-md w-48 h-8"
              ></input>
            ))}
            <button
              className="px-5 mt-2 text-center justify-items-end py-2 rounded bg-green2 text-white hover:bg-green1 focus:outline-none transition-colors"
              onClick={handlePhotosClick}
            >
              Add Url
            </button> */}

                <button
                  onClick={() => handleAdd()}
                  type="button"
                  className="px-5 mt-2 text-center justify-items-end py-2 rounded bg-green2 text-white hover:bg-green1 focus:outline-none transition-colors"
                >
                  Add
                </button>
                {val.map((data, i) => {
                  return (
                    <div>
                      <input
                        value={data}
                        onChange={(e) => handleChange(e, i)}
                        className="border p-2 mt-2 rounded text-md shadow-md w-60 h-8"
                      />
                      <button
                        onClick={() => handleDelete(i)}
                        className="border text-lg w-8 h-8 ml-1 bg-green2 text-white rounded"
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mx-auto">
              <div className="bg-white border-2 rounded-md shadow-md p-6 my-4">
                <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-green2 w-40">
                  Contact
                </h1>
                <input
                  onChange={(e) => handle(e)}
                  id="email"
                  value={data.email}
                  type="text"
                  placeholder="Email"
                  className="border p-2 rounded w-full shadow-md mb-4 placeholder:text-gray-500"
                />
                <input
                  onChange={(e) => handle(e)}
                  id="phone"
                  value={data.phone}
                  type="text"
                  placeholder="Phone"
                  className="border p-2 rounded w-full shadow-md mb-4 placeholder:text-gray-500"
                />
                <button
                  // onClick={handleClick}
                  type="submit"
                  id="next"
                  class="px-5 mt-2 text-center justify-items-end py-2 rounded bg-green2 text-white hover:bg-green1 focus:outline-none transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>{" "}
      <h1 className="text-gray-500">.</h1>
      {/* </div> */}
    </div>
  );
};
export default PropertyDetails;
