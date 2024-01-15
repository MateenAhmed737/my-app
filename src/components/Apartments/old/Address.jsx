import React from "react";
import { Location } from "../../../assets";

const Address = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-5/12 justify-self-center">
        <img className="w-full max-w-[120px]" src={Location} alt="location" />
      </div>
      <div className="sm:w-7/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            What is your{" "}
            <span className="font-semibold text-blue-700">current address</span>{" "}
            ?
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Please enter an address (loading point).
          </h2>

          <div className="mt-8">
            <input
              type="text"
              name="address"
              value={state?.address}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 text-xs text-gray-700 border rounded-md focus:border-gray-800 focus:outline-none"
              placeholder="Street, house number"
              required
            />
            <input
              type="number"
              name="postal_code"
              onChange={handleChange}
              value={state?.postal_code}
              className="w-full px-4 py-2 mt-2 text-xs text-gray-700 border rounded-md focus:border-gray-800 focus:outline-none"
              placeholder="Postal code"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
