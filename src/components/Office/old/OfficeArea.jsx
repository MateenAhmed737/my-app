import React from "react";
import { House } from "../../../assets";

const OfficeArea = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-4/12 justify-self-center">
        <img
          className="w-full max-w-[120px] mx-auto mt-2"
          src={House}
          alt="house"
        />
      </div>
      <div className="mx-auto mt-5 sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg">
            Nennen Sie uns Ihre{" "}
            <span className="font-semibold text-blue-700">Bürofläsche</span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Schätzen Sie die Größe der Bürofläsche.
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label htmlFor="office_length" className="text-xs font-semibold">
              Bürolänge in qm
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.office_length}
            </span>
            <input
              type="range"
              name="office_length"
              value={state?.office_length}
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
