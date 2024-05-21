import React from "react";
import { useState } from "react";
import Bar2 from "../components/FormHero/Bar2";
import { useRouter } from "next/router";
import axios from "axios";

const view = () => {
  const url = "https://rentor-b.onrender.com/property/add";
  const router = useRouter();

  var {
    title,
    description,
    price,
    type,
    area,
    num_rooms,
    num_bath_rooms,
    floor_location,
    street_address,
    furnished,
    city,
    postal_code,
    email,
    phone,
    images,
    lon,
    lat,
  } = router.query;

  var boolFurnished;
  var valFurnished;
  if (furnished == "false") {
    boolFurnished = false;
    valFurnished = "No";
  } else {
    boolFurnished = true;
    valFurnished = "Yes";
  }

  if (typeof images === "undefined") {
    images = [];
  }

  const data = {
    title: title,
    description: description,
    price: price,
    type: type,
    area: area,
    num_rooms: num_rooms,
    num_bath_rooms: num_bath_rooms,
    floor_location: floor_location,
    street_address: street_address,
    furnished: boolFurnished,
    city: city,
    postal_code: postal_code,
    email: email,
    phone: phone,
    images: images,
    location: {
      latitude: Number(lat),
      longitude: Number(lon),
    },
  };

  console.log(data);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, {
        title: data.title,
        description: data.description,
        price: data.price,
        type: data.type,
        area: data.area,
        num_rooms: data.num_rooms,
        num_bath_rooms: data.num_bath_rooms,
        floor_location: data.floor_location,
        street_address: data.street_address,
        furnished: data.furnished,
        city: data.city,
        postal_code: data.postal_code,
        email: data.email,
        phone: data.phone,
        images: data.images,
        location: {
          latitude: data.location.latitude,
          longitude: data.location.longitude,
        },
      });
      console.log("DONEE!!");
      // After successful submission, navigate to another page
      router.push("/Published");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div
      style={{ backgroundImage: "url('./images/image1.jpg')" }}
      className="bg-fixed bg-center bg-no-repeat bg-cover"
    >
      <Bar2 />
      <div className="container mx-auto mb-6">
        <div className="mx-auto">
          <div className="general_info bg-white shadow-lg px-6 pb-5 pt-6 mb-4 rounded-lg">
            <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
              General Information
            </h1>
            <dl>
              <div class="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-md font-medium text-gray-500">Title :</dt>
                <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.title}
                </dd>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-md font-medium text-gray-500">Price :</dt>
                <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.price}
                </dd>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-md font-medium text-gray-500">Type :</dt>
                <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.type}
                </dd>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-md font-medium text-gray-500">Description :</dt>
                <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.description}
                </dd>
              </div>
            </dl>
          </div>
          <div className="bg-white border-2 rounded-md shadow-md px-6 py-5 mb-4">
            <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
              Detailed Information
            </h1>
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <dl>
                <div class="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">Area :</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.area}
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">Bedrooms :</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.num_rooms}
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">Bathrooms :</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.num_bath_rooms}
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">Floor :</dt>
                  <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.floor_location}
                  </dd>
                </div>
              </dl>
              <dl>
                <div class="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">Furnished :</dt>
                  <dd class="mt-1 text-md font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {valFurnished}
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">Address :</dt>
                  <dd class="mt-1 text-md font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.street_address}
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">City :</dt>
                  <dd class="mt-1 text-md font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.city}
                  </dd>
                </div>
                <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                  <dt class="text-md font-medium text-gray-500">
                    ZIP / Postal :
                  </dt>
                  <dd class="mt-1 text-md font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                    {data.postal_code}
                  </dd>
                </div>
              </dl>
            </div>
            {/* <div class="bg-white px-4 py-4 sm:gap-4 sm:px-6 flex">
              <dt class="text-md font-medium text-gray-500 mr-2">Location :</dt>
              <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                {data.location.longitude}, {data.location.latitude}
              </dd>
            </div>
            <div class="bg-white px-2 py-4 sm:gap-4 sm:px-6 flex">
              <dt class="text-md font-medium text-gray-500">Images Links :</dt>
              <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                {data.images.map((image, index) => (
                  <p key={index}>{image}</p>
                ))}
              </dd>
            </div> */}
          </div>
          <div className="general_info bg-white shadow-lg px-6 pb-5 pt-6 mb-6 rounded-lg">
            <h1 className="text-l font-semibold mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-amber-600 w-40">
              Contact Information
            </h1>
            <dl>
              <div class="bg-white px-2 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-md font-medium text-gray-500">Email :</dt>
                <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.email}
                </dd>
              </div>
              <div class="bg-white px-4 py-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6">
                <dt class="text-md font-medium text-gray-500">Phone :</dt>
                <dd class="mt-1 text-md font-semibold text-gray-900 sm:mt-0 sm:col-span-2">
                  {data.phone}
                </dd>
              </div>
            </dl>
          </div>
          <div className="general_info px-6 pb-5 mb-6 rounded-lg">
            <button
              onClick={submit}
              id="next"
              class="px-5 mt-2 text-center justify-items-end py-2 rounded bg-amber-600 text-white hover:bg-amber-800 focus:outline-none transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default view;
