import React from "react";
import { ParkingAvailable, ParkingUnavailable } from "../../../assets";

const Parking = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="min-h-max">
      <div className="mt-5">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            Are there free{" "}
            <span className="font-semibold text-blue-700">
              parking spaces available?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">Please choose an option.</h2>

          <div className="flex justify-center mt-8 space-x-4">
            <div
              onClick={() =>
                handleChange({ target: { value: "Yes", name: "parking" } })
              }
              className={`relative pb-1.5 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.parking === "Yes"
                  ? "hover:!ring-gray-500 ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="parking"
                value="Yes"
                onChange={handleChange}
                checked={state.parking === "Yes"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[150px]"
                src={ParkingAvailable}
                alt="parking-available"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Parking Available
              </span>
            </div>
            {/* Another radio input and image for parking unavailable */}
            <div
              onClick={() =>
                handleChange({ target: { value: "No", name: "parking" } })
              }
              className={`relative pb-1.5 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.parking === "No"
                  ? "hover:!ring-gray-500 ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="parking"
                value="No"
                onChange={handleChange}
                checked={state.parking === "No"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[150px]"
                src={ParkingUnavailable}
                alt="parking-unavailable"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Parking Unavailable
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Parking;
