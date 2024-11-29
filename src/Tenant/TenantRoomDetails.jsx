
//beta version

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";


function TenantRoomDetails() {
  const [address , setAddress] = useState('');
  const [houseType, setHouseType] = useState('');
  const [prices,setPrices] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();

  };


  return (
    <>
      <form onSubmit={submitHandler} encType="multipart/form-data">
        <div className="w-screen h-fit mt-24 mb-16 flex flex-col justify-center">
          {/* Address Field */}
          <div className="flex items-center w-11/12 h-20 m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Personal Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your address"
              name="address"
              value={address}
            />
          </div>


          <div className="flex items-center w-11/12 h-20 m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
              House Type
            </label>
            <input
              onChange={(e) => setHouseType(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your house type you want ex.  2BHK ,3 BHK or 4 BHK"
              name="houseType"
              value={houseType}
            />
          </div>

          {/* Restriction Input */}

          <div className="flex items-center w-11/12 h-20 m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
          <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
             Restrictions
            </label>
          
            <input
              type="text"
              
              // onChange={(e) => setInputRestrictData(e.target.value)}
              placeholder="Enter restriction"
            />
            <button
              type="button"
    
              className="w-40 h-10 p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg flex items-center justify-center rounded-lg border-2 border-blue-700 transition-all duration-150 ease-in-out"
            >
              Add
            </button>

            {/* Display Restrictions */}
           
          </div>

          <div className="flex items-center w-11/12 h-20 m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
          
          <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800  ">
              Facilities
            </label>
          
            <input
              type="text"
          
              placeholder="Enter facilities"
            />
           

            {/* Display facilities */}
           
          </div>

          {/* Upload Images */}
          <div className="flex items-center w-11/12 h-auto m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-96 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Upload Images of Your House
            </label>
            <input
              type="file"
              name="uploadImage"
              onChange={(e) => setUploadImage(e.target.files[0])}
            />
          </div>

          {/* Upload Videos */}
          <div className="flex items-center w-11/12 h-auto m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-96 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Upload Videos of Your House
            </label>
            <input
              type="file"
              name="uploadVideo"
              onChange={(e) => setuploadVideo(e.target.files[0])}
            />
          </div>

          {/* Price Field */}
          <div className="flex items-center w-11/12 h-20 m-3 p-6 rounded-md border-2 border-gray-300 shadow-lg bg-white">
            <label className="flex w-80 flex-col text-2xl font-semibold leading-5 text-gray-800">
              Price of House
            </label>
            <input
              onChange={(e) => setPrices(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your address"
              name="prices"
              value={prices}
            />
          </div>

          {/* Submit Button */}
          <div className="w-screen flex justify-center">
            <button
              className="block w-1/2 select-none rounded-lg bg-green-600 hover:bg-green-700 py-3.5 px-20 text-center font-sans text-lg font-bold uppercase text-white shadow-md transition-all duration-150 ease-in-out"
              type="submit"
            >
              Submit All
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TenantRoomDetails;
