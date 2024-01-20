import React from "react";
import { ElevatorAvailable, ElevatorUnavailable } from "../../../assets";

const Elevator = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="min-h-max">
      <div className="mt-5">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            Ist ein{" "}
            <span className="font-semibold text-blue-700">
              Aufzug im Haus vorhanden ?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Bitte wählen Sie eine Option
          </h2>

          <div className="flex justify-center mt-8 space-x-4">
            <div
              onClick={() =>
                handleChange({
                  target: { value: "available", name: "elevator" },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.elevator === "available"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="elevator"
                value="available"
                onChange={handleChange}
                checked={state.elevator === "available"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[150px]"
                src={ElevatorAvailable}
                alt="elevator-available"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Vorhanden
              </span>
            </div>

            <div
              onClick={() =>
                handleChange({
                  target: { value: "unavailable", name: "elevator" },
                })
              }
              className={`relative pb-7 pt-1 cursor-pointer ring-2 ring-transparent hover:ring-gray-300 ${
                state.elevator === "unavailable"
                  ? "hover:!ring-gray-500 !ring-gray-500"
                  : ""
              }`}
            >
              {/* radio button */}
              <input
                type="radio"
                name="elevator"
                value="unavailable"
                onChange={handleChange}
                checked={state.elevator === "unavailable"}
                className="hidden"
                required
              />

              <img
                className="w-full max-w-[150px]"
                src={ElevatorUnavailable}
                alt="elevator-unavailable"
              />
              <span className="absolute inset-x-0 bottom-0 inline-block w-full p-2 py-1 text-xs text-white bg-blue-700">
                Nicht Vorhanden
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Elevator;
