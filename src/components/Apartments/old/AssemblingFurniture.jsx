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
            Benötigen Sie Hilfe bei der{" "}
            <span className="font-semibold text-blue-700">Möbelmontage ?</span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Bitte wählen Sie eine Option.
          </h2>

          <div className="flex justify-center mt-8 space-x-4">
            <div
              onClick={() =>
                handleChange({
                  target: {
                    value: "With Assemble",
                    name: "assembling_furniture",
                  },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.assembling_furniture === "With Assemble"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="assembling_furniture"
                value="With Assemble"
                onChange={handleChange}
                checked={state.assembling_furniture === "With Assemble"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[140px] px-3"
                src={WithAssemble}
                alt="with-assemble"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Mit Möbelmontage
              </span>
            </div>

            <div
              onClick={() =>
                handleChange({
                  target: {
                    value: "Without Assemble",
                    name: "assembling_furniture",
                  },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.assembling_furniture === "Without Assemble"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="assembling_furniture"
                value="Without Assemble"
                onChange={handleChange}
                checked={state.assembling_furniture === "Without Assemble"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[140px] px-3"
                src={WithoutAssemble}
                alt="without-assemble"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Ohne Möbelmontage
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
                  ? "hover:!ring-gray-500 !ring-gray-500"
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
                Teilwesie
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssemblingFurniture;
