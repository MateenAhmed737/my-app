import React from "react";
import {
  PartialyAssemble,
  WithoutAssemble,
  WithAssemble,
} from "../../../assets";

const AssemblingFurniture = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="min-h-max">
      <div className="mt-5">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            Do you need help{" "}
            <span className="font-semibold text-blue-700">
              assembling furniture?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">Please choose an option.</h2>

          <div className="flex justify-center mt-8 space-x-4">
            <div
              onClick={() =>
                handleChange({
                  target: {
                    value: "with assemble",
                    name: "assembling_furniture",
                  },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.assembling_furniture === "with assemble"
                  ? "hover:!ring-gray-500 ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="assembling_furniture"
                value="with assemble"
                onChange={handleChange}
                checked={state.assembling_furniture === "with assemble"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[140px] px-3"
                src={WithAssemble}
                alt="with-assemble"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                With Assemble
              </span>
            </div>

            <div
              onClick={() =>
                handleChange({
                  target: {
                    value: "without assemble",
                    name: "assembling_furniture",
                  },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.assembling_furniture === "without assemble"
                  ? "hover:!ring-gray-500 ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="assembling_furniture"
                value="without assemble"
                onChange={handleChange}
                checked={state.assembling_furniture === "without assemble"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[140px] px-3"
                src={WithoutAssemble}
                alt="without-assemble"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Without Assemble
              </span>
            </div>

            <div
              onClick={() =>
                handleChange({
                  target: { value: "partialy", name: "assembling_furniture" },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.assembling_furniture === "partialy"
                  ? "hover:!ring-gray-500 ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="assembling_furniture"
                value="partialy"
                onChange={handleChange}
                checked={state.assembling_furniture === "partialy"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[140px] px-3"
                src={PartialyAssemble}
                alt="partialy"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Partialy
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssemblingFurniture;
