// // area rooms bathrooms

// import React, { useState } from "react";
// import axios from "axios";

// const PricePrediction = () => {
//   const [area, setArea] = useState("");
//   const [rooms, setRooms] = useState("");
//   const [bathrooms, setBathrooms] = useState("");
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = {
//       area: parseInt(area),
//       rooms: parseInt(rooms),
//       bathrooms: parseInt(bathrooms),
//     };

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:3000/PricePrediciton",
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       setResult(response.data.result);
//       setError(null);
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Failed to get prediction. Please try again.");
//       setResult(null);
//     }
//   };
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <form className="justify-center items-center max-w-md w-full p-3 bg-gray-50 rounded shadow-xl">
//           <p className="tracking-wide text-gray-700 text-base font-bold mb-2 text-center">
//             Price Prediction
//           </p>
//           <div class="w-full px-3 md:mb-0">
//             <label
//               class="block  tracking-wide  text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               Area
//             </label>
//             <input
//               class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
//               id="grid-first-name"
//               type="text"
//               placeholder="140"
//             />
//             <label
//               class="block  tracking-wide  text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               Bedrooms
//             </label>
//             <input
//               class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
//               id="grid-first-name"
//               type="text"
//               placeholder="3"
//             />
//             <label
//               class="block  tracking-wide  text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               Bathrooms
//             </label>
//             <input
//               class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
//               id="grid-first-name"
//               type="text"
//               placeholder="2"
//             />
//             <label
//               class="block  tracking-wide  text-xs font-bold mb-2"
//               for="grid-first-name"
//             >
//               Floor
//             </label>
//             <input
//               class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
//               id="grid-first-name"
//               type="text"
//               placeholder="5"
//             />
//             <label
//               class="block tracking-wide text-xs font-bold mb-2"
//               for="grid-state"
//             >
//               City
//             </label>
//             <div class="relative">
//               <select
//                 class="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-state"
//               >
//                 <option>Alexandria</option>
//                 <option>Cairo</option>
//                 <option>Giza</option>
//                 <option>Mansoura</option>
//                 <option>Assuit</option>
//                 <option>Aswan</option>
//                 <option>Luxer</option>
//                 <option>Port Said</option>
//                 <option>Suez</option>
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="tracking-wide font-bold w-full mt-4 bg-amber-600 text-white p-2 rounded focus:outline-none focus:shadow-outline-blue "
//             >
//               Predict
//             </button>
//           </div>
//         </form>

//         <div className="flex mt-4 p-4 bg-gray-50 rounded shadow-md">
//           <div className="flex items-center mr-2">
//             <span className="text-sm mr-1 tracking-wide font-bold">Min</span>
//             <input
//               className="border-2 border-amber-600 rounded w-24 h-10 text-center italic"
//               value={300}
//             />
//           </div>
//           <div className="flex items-center mx-2">
//             <span className="font-bold text-xl">-</span>
//           </div>
//           <div className="flex items-center ml-2">
//             <span className="text-sm mr-1 tracking-wide font-bold">Max</span>
//             <input
//               className="border-2 border-amber-600 rounded w-24 h-10 text-center italic"
//               value={2000}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricePrediction;

import { useState } from "react";

export default function PricePredictionForm() {
  const [area, setArea] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setPredictedPrice(null);

    const response = await fetch("/api/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: parseFloat(area),
        rooms: parseInt(rooms),
        bathrooms: parseInt(bathrooms),
      }),
    });

    const data = await response.json();

    if (data.error) {
      setError(data.error);
    } else {
      setPredictedPrice(data.predicted_price);
    }
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Area:
    //       <input
    //         type="number"
    //         value={area}
    //         onChange={(e) => setArea(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       Rooms:
    //       <input
    //         type="number"
    //         value={rooms}
    //         onChange={(e) => setRooms(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       Bathrooms:
    //       <input
    //         type="number"
    //         value={bathrooms}
    //         onChange={(e) => setBathrooms(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <button type="submit">Predict Price</button>
    //   </form>
    //   {predictedPrice && (
    //     <div>
    //       <h3>Predicted Price before: ${predictedPrice}</h3>
    //       <h3>Predicted Price after: ${predictedPrice - 15000}</h3>
    //     </div>
    //   )}
    //   {error && (
    //     <div>
    //       <h3>Error: {error}</h3>
    //     </div>
    //   )}
    // </div>
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="justify-center items-center max-w-md w-full p-3 bg-gray-50 rounded shadow-xl"
        >
          <p className="tracking-wide text-gray-700 text-base font-bold mb-2 text-center">
            Price Prediction
          </p>
          <div class="w-full px-3 md:mb-0">
            <label
              class="block  tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Area
            </label>
            <input
              class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
              id="grid-first-name"
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="140"
              required
            />
            <label
              class="block  tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Bedrooms
            </label>
            <input
              class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
              id="grid-first-name"
              type="text"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              placeholder="3"
              required
            />
            <label
              class="block  tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Bathrooms
            </label>
            <input
              class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
              id="grid-first-name"
              type="text"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              placeholder="2"
              required
            />
            <label
              class="block  tracking-wide  text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Floor
            </label>
            <input
              class="appearance-none block w-full shadow-sm border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="5"
            />
            <label
              class="block tracking-wide text-xs font-bold mb-2"
              for="grid-state"
            >
              City
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Alexandria</option>
                <option>Cairo</option>
                <option>Giza</option>
                <option>Mansoura</option>
                <option>Assuit</option>
                <option>Aswan</option>
                <option>Luxer</option>
                <option>Port Said</option>
                <option>Suez</option>
              </select>
            </div>
            <button
              type="submit"
              className="tracking-wide font-bold w-full mt-4 bg-green1 text-white p-2 rounded focus:shadow-outline-blue hover:bg-grey1 focus:ring-4 focus:outline-none focus:ring-grey1 focus:bg-bej1 focus:text-black"
            >
              Predict
            </button>
          </div>
        </form>
        {predictedPrice && (
          <div className="flex mt-6 p-4 bg-gray-50 rounded shadow-md transform transition duration-500 hover:scale-110 ">
            <div className="flex items-center mr-2">
              <span className="text-sm mr-1 tracking-wide font-bold">Min</span>
              <input
                className="border-2 border-green1 rounded w-24 h-10 text-center italic"
                value={Math.floor(Math.abs(predictedPrice - 15340))}
              />
            </div>
            <div className="flex items-center mx-2">
              <span className="font-bold text-xl">-</span>
            </div>
            <div className="flex items-center ml-2">
              <span className="text-sm mr-1 tracking-wide font-bold">Max</span>
              <input
                className="border-2 border-green1 rounded w-24 h-10 text-center italic"
                value={Math.round(predictedPrice)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
