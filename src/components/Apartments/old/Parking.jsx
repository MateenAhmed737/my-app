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
          Sind freie{" "}
            <span className="font-semibold text-blue-700">
            Parkplätze vorhanden ?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">Bitte wählen Sie eine Option.</h2>

          <div className="flex justify-center mt-8 space-x-4">
            <div
              onClick={() =>
                handleChange({ target: { value: "available", name: "parking" } })
              }
              className={`relative pb-1.5 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.parking === "available"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="parking"
                value="available"
                onChange={handleChange}
                checked={state.parking === "available"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[150px]"
                src={ParkingAvailable}
                alt="parking-available"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Vorhanden
              </span>
            </div>
            {/* Another radio input and image for parking unavailable */}
            <div
              onClick={() =>
                handleChange({ target: { value: "unavailable", name: "parking" } })
              }
              className={`relative pb-1.5 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.parking === "unavailable"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="parking"
                value="unavailable"
                onChange={handleChange}
                checked={state.parking === "unavailable"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[150px]"
                src={ParkingUnavailable}
                alt="parking-unavailable"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Nicht Vorhanden
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Parking;
