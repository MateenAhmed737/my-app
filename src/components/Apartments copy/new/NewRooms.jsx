import React from "react";
import { Plan } from "../../../assets";

const Rooms = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-5/12 justify-self-center">
        <img className="w-full max-w-[120px] mt-2" src={Plan} alt="plan" />
      </div>
      <div className="mt-5 sm:w-7/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            How many <span className="font-semibold text-blue-700">rooms</span>{" "}
            are there?
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Number of rooms including kitchen and bathroom.
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label htmlFor="number_of_rooms" className="text-xs font-semibold">
              Number of rooms
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.number_of_rooms}
            </span>
            <input
              type="range"
              name="number_of_rooms"
              value={state?.number_of_rooms}
              onChange={handleChange}
              className="w-full px-4 py-2 -mt-2 text-xs text-gray-700 border rounded-md focus:border-gray-800 focus:outline-none"
              max={10}
              min={1}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rooms;
