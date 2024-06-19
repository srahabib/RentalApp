import React from "react";
import { useRouter } from "next/router";
import Bar3 from "../components/FormHero/Bar3";

const Published = () => {
  const router = useRouter();
  const Adding = () => {
    router.push("/propertyDetails2");
  };
  const GoBack = () => {
    router.push("/");
  };

  return (
    <main>
      <Bar3 />
      <div class="bg-gray-100">
        <div class="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            class="text-green1 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Your Property has been published successfully.
            </h3>
            <p class="text-gray-600 my-2">Thank you .</p>
            <div class="py-3 text-center ">
              <button
                onClick={Adding}
                type="submit"
                class="bg-green2 hover:bg-green1 m-8 text-whitem-8 text-white font-semibold py-3 p-5 rounded text-lg w-auto "
              >
                ADDING NEW ONE
              </button>
              <button
                onClick={GoBack}
                type="submit"
                class="bg-green2 hover:bg-green1 text-white font-semibold py-3 p-5 rounded text-lg w-auto "
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Published;
