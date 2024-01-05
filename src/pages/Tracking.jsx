import React from "react";
import Map from "../components/Map";

const Tracking = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          Live Tracking
        </h1>
        <div className="w-full h-80 border border-gray-300 mb-6 flex items-center justify-center overflow-hidden rounded-md">
          <Map />
        </div>
        <p className="text-gray-600">
          See your location in real-time on the map.
        </p>
      </div>
    </div>
  );
};

export default Tracking;
