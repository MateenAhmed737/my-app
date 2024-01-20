import React from "react";
import { House } from "../../../assets";

const LivingArea = ({ handleSubmit, state, setState }) => {
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
            Wie groß ist die{" "}
            <span className="font-semibold text-blue-700">Wohnfläche</span> der
            Wohnung?
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Die Wohnfläche bezeichnet die Summe der anrechenbaren Grundflächen
            der Räume, die ausschließlich zu einer Wohnung gehören.
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label
              htmlFor="appartment_length"
              className="text-xs font-semibold"
            >
              Länge der Wohnung in m²
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.appartment_length}
            </span>
            <input
              type="range"
              name="appartment_length"
              value={state?.appartment_length}
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

export default LivingArea;
