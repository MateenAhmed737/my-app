import React from "react";
import { ApartmentBuilding, DetachedHouse, SemiDetachedHouse, TownHouse } from "../../assets";

const HouseType = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="min-h-max">
      <div className="mt-5">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
          Choose the{" "}
            <span className="font-semibold text-blue-700">
              type of house?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">Please choose an option.</h2>

          <div className="flex justify-center mt-8 space-x-4">
            <div
              onClick={() =>
                handleChange({ target: { value: "detached_house", name: "house_type" } })
              }
              className={`relative pt-1 px-4 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.house_type === "detached_house"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="house_type"
                value="detached_house"
                onChange={handleChange}
                checked={state.house_type === "detached_house"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[100px]"
                src={DetachedHouse}
                alt="detached_house"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
              Detached House
              </span>
            </div>

            <div
              onClick={() =>
                handleChange({ target: { value: "apartment_building", name: "house_type" } })
              }
              className={`relative pt-1.5 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.house_type === "apartment_building"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="house_type"
                value="apartment_building"
                onChange={handleChange}
                checked={state.house_type === "apartment_building"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[100px]"
                src={ApartmentBuilding}
                alt="apartment_building"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
              Apartment Building
              </span>
            </div>
            
            <div
              onClick={() =>
                handleChange({ target: { value: "town_house", name: "house_type" } })
              }
              className={`relative px-1 pt-2 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.house_type === "town_house"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="house_type"
                value="town_house"
                onChange={handleChange}
                checked={state.house_type === "town_house"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[100px]"
                src={TownHouse}
                alt="town_house"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
              Town House
              </span>
            </div>
            
            <div
              onClick={() =>
                handleChange({ target: { value: "semidetached_house", name: "house_type" } })
              }
              className={`relative pb-6 px-3 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.house_type === "semidetached_house"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="house_type"
                value="semidetached_house"
                onChange={handleChange}
                checked={state.house_type === "semidetached_house"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[110px]"
                src={SemiDetachedHouse}
                alt="semidetached_house"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-[10px] text-white bg-blue-700">
              Semi-Detached House
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HouseType;
