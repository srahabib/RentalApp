import React from "react";
import Search from "../Search/Search";

const trending_data = [
    {
      id: 1,
      src: "https://r-xx.bstatic.com/xdata/images/city/526x420/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o=",
      title: "Dubai",
      location: "United Arab Emirates",
      description: "15 Deals",
    },
    {
      id: 2,
      src: "https://cf.bstatic.com/xdata/images/xphoto/540x405/288594543.webp?k=7a96a2b4190146f63068bd0604a916c0c885c4899a527e24a9b39487d4ae50b8&o=",
      title: "South Korea",
      location: "Asia",
      description: "32 Deals",
    },
    {
      id: 3,
      src: "https://cf.bstatic.com/xdata/images/xphoto/540x405/289320924.webp?k=99a00f2907495aaeb6396695c053e3d8b95fb05619b10e76c89fb1f7d1fec427&o=",
      title: "London",
      location: "United Kingdom",
      description: "45 Deals",
    },
    {
      id: 4,
      src: "https://cf.bstatic.com/xdata/images/xphoto/540x405/290483794.webp?k=916f7bac0ccdb08efcb269ad29cc10816ab66cd1671359066d23d32fb17b5c39&o=",
      title: "Singapore",
      location: "Asia",
      description: "88 Deals",
    },
    {
      id: 5,
      src: "https://cf.bstatic.com/xdata/images/xphoto/540x405/173724501.webp?k=5e8a2353c6cd4efef3c5f992ea36d65598c52f2662d45cedc460d1a6a759109f&o=",
      title: "New York City",
      location: "United States of America",
      description: "92 Deals",
    },
  ];

const HeroSection = () => {
    return(
    <main className="bg-[#EADDCA] pb-10 mb-10">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <Search/> 
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    );
};

export default HeroSection;