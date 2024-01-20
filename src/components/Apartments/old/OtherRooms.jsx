import React from "react";
import { OtherRooms as OtherRoomsImg } from "../../../assets";

const OtherRooms = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    const isIncluded = state.other_rooms.includes(e.target.value);
    const newState = isIncluded
      ? state.other_rooms.filter((room) => room !== e.target.value)
      : [...state.other_rooms, e.target.value];

    setState(e.target.name, newState);
  };

  const checkboxes = [
    "Garage/Carport",
    "Keller",
    "Dachboden",
    "Estrich",
    "Hobbyraum",
    "Andere",
  ];

  return (
    <div className="flex flex-col items-center w-full sm:flex-row min-h-max">
      <div className="h-full sm:w-4/12">
        <img
          className="w-full max-w-[120px] mx-auto"
          src={OtherRoomsImg}
          alt="stairs"
        />
      </div>
      <div className="flex justify-center sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            Gibt es weitere{" "}
            <span className="font-semibold text-blue-700">Räume ?</span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Weitere Räume hinzufügen.
          </h2>

          <div className="mt-5">
            {/* Checkboxes */}
            <div className="flex flex-col space-y-2">
              {checkboxes.map((checkbox) => (
                <div key={checkbox} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={checkbox}
                    name="other_rooms"
                    value={checkbox}
                    checked={state.other_rooms.includes(checkbox)}
                    onChange={handleChange}
                  />
                  <label htmlFor={checkbox} className="text-xs font-medium">
                    {checkbox}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtherRooms;
