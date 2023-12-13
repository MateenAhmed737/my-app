import React from "react";
import { House } from "../../../assets";

const OfficeArea = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-4/12 justify-self-center">
        <img
          className="w-full max-w-[120px] mx-auto mt-2"
          src={House}
          alt="house"
        />
      </div>
      <div className="mt-5 sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg">
            How big is the{" "}
            <span className="font-semibold text-blue-700">living area</span> of
            the apartment ?
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            The living area refers to the sum of the eligible floor areas the
            rooms that belong exclusively to an apartment.
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label
              htmlFor="new_office_area_length"
              className="text-xs font-semibold"
            >
              Length of the apartment in m²
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.new_office_area_length}
            </span>
            <input
              type="range"
              name="new_office_area_length"
              value={state?.new_office_area_length}
              onChange={handleChange}
              className="w-full px-4 py-2 -mt-2 text-xs text-gray-700 border rounded-md focus:border-gray-800 focus:outline-none"
              max={200}
              min={20}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfficeArea;
