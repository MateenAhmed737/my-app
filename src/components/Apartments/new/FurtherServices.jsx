import React from "react";
import { FurtherServices as FurtherServicesImg } from "../../../assets";

const FurtherServices = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    const isIncluded = state.further_services.includes(e.target.value);
    const newState = isIncluded
      ? state.further_services.filter((room) => room !== e.target.value)
      : [...state.further_services, e.target.value];

    setState(e.target.name, newState);
  };

  const checkboxes = [
    "Endreinigung inkl. Abnahmegarantie",
    "Entsorgung/Räumung",
    "Zwischenlagerung",
    "Umzugkartons Leihe",
    "Klavier vorhanden",
    "Möbellift gewünscht",
    "Andere",
  ];

  return (
    <div className="flex flex-col items-center w-full sm:flex-row min-h-max">
      <div className="h-full sm:w-4/12">
        <img
          className="w-full max-w-[120px] mx-auto"
          src={FurtherServicesImg}
          alt="further-services"
        />
      </div>
      <div className="flex justify-center sm:w-8/12">
        <form onSubmit={handleSubmit} id="current-form">
          <h2 className="text-lg whitespace-nowrap">
            Benötigen Sie weitere{" "}
            <span className="font-semibold text-blue-700">
              Dienstleistungen?
            </span>
          </h2>
          <h2 className="mt-3 text-xs font-normal">
            Weitere Dienstleistungen hinzufügen.
          </h2>

          <div className="mt-5">
            {/* Checkboxes */}
            <div className="flex flex-col space-y-2">
              {checkboxes.map((checkbox) => (
                <div key={checkbox} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={checkbox}
                    name="further_services"
                    value={checkbox}
                    checked={state.further_services.includes(checkbox)}
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

export default FurtherServices;
