import React from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

export default function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard */}
      <div className="p-6">

        

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">

          {/* Add Food */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Add Food
            </h2>

            <button
              onClick={() => navigate("/")}
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Open
            </button>
          </div>

          {/* View Foods */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Food List
            </h2>

            <button
              onClick={() => navigate("/foodSelect")}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-500"
            >
              Open
            </button>
          </div>

          {/* Imports */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Imports
            </h2>

            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-500"
            >
              Open
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}