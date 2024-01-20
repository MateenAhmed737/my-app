import React from "react";
import { StairsImg } from "../../../assets";

const Stairs = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-5/12">
        <img
          className="w-full max-w-[120px] mx-auto mt-2"
          src={StairsImg}
          alt="stairs"
        />
      </div>
      <div className="mt-5 sm:w-7/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg">
            <span className="font-semibold text-blue-700">
              In welchem Stock
            </span>{" "}
            befindet sich die neue Wohnung ?
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Bitte wählen Sie ein Stockwerk aus.
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label htmlFor="new_floor" className="text-xs font-semibold">
              Neue Wohnung, Etage Nr.
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.new_floor}
            </span>
            <input
              type="range"
              name="new_floor"
              value={state?.new_floor}
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

export default Stairs;
