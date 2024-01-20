import React from "react";
import { ParkingDistanceImg } from "../../../assets";

const ParkingDistance = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row min-h-max">
      <div className="self-center h-full sm:w-4/12 justify-self-center">
        <img
          className="w-full max-w-[120px] mx-auto mt-2"
          src={ParkingDistanceImg}
          alt="parking-distance"
        />
      </div>
      <div className="mt-5 sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg">
            Distanz vom Parkplatz{" "}
            <span className="font-semibold text-blue-700">
              zum Hauseingang ?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Schätzen Sie bitte die Entfernung (einzüge Adresse)
          </h2>

          <div className="mt-8 text-left">
            {/* a label */}
            <label
              htmlFor="new_parking_distance"
              className="text-xs font-semibold"
            >
              Entfernung zwischen dem LKW-Parkplatz und Hauseingang in metern
            </label>
            <br />
            <br />

            <span className="block w-full -mt-5 text-center">
              {state?.new_parking_distance}
            </span>
            <input
              type="range"
              name="new_parking_distance"
              value={state?.new_parking_distance}
              onChange={handleChange}
              className="w-full px-4 py-2 -mt-2 text-xs text-gray-700 border rounded-md focus:border-gray-800 focus:outline-none"
              max={100}
              min={1}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParkingDistance;
