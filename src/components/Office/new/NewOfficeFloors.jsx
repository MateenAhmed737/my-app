import React from "react";
import { StairsImg } from "../../../assets";

const NewOfficeFloors = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-4/12">
        <img
          className="w-full max-w-[120px] mx-auto mt-2"
          src={StairsImg}
          alt="stairs"
        />
      </div>
      <div className="mt-5 sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg">
            Im welchen Stock{" "}
            <span className="font-semibold text-blue-700">
              befindet sich das neue Büro ?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Es handelt sich hier um Ihren Einzug!
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label htmlFor="new_floor" className="text-xs font-semibold">
              Neue Büroetage Nr.
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

export default NewOfficeFloors;
