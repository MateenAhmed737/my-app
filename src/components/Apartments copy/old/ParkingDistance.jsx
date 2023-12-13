import React from "react";
import { ParkingDistanceImg } from "../../../assets";

const ParkingDistance = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-4/12 justify-self-center">
        <img
          className="w-full max-w-[120px] mx-auto mt-2"
          src={ParkingDistanceImg}
          alt="parking-distance"
        />
      </div>
      <div className="mt-5 sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg">
            Distance from the parking lot{" "}
            <span className="font-semibold text-blue-700">
              to the entrance to the house?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Please estimate the distance (current address)
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label htmlFor="parking_distance" className="text-xs font-semibold">
              Distance between the truck parking lot and the house entrance in
              meters
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.parking_distance}
            </span>
            <input
              type="range"
              name="parking_distance"
              value={state?.parking_distance}
              onChange={handleChange}
              className="w-full px-4 py-2 -mt-2 text-xs text-gray-700 border rounded-md focus:border-gray-800 focus:outline-none"
              max={100}
              min={1}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParkingDistance;
