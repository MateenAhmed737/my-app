import React from "react";

const FreeOffer = ({ handleSubmit, state, setState }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target[name==="terms" ? "checked" : "value"];
    const newState = { ...state.details, [name]: value };

    setState("details", newState);
  };

  const radioBtns = ["mister", "woman", "company"];
  const fields = [
    "name",
    "email",
    "phone",
    "interview_appointment",
    "moving_date",
  ];

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="w-full" id="current-form">
        <h2 className="text-lg font-semibold text-blue-700 whitespace-nowrap">
          Free Offer
        </h2>
        <h2 className="text-xs font-normal">Who can receive the offer?</h2>

        {/* Radio Buttons */}
        <div className="flex flex-wrap items-center w-full my-3 mt-5 space-x-4">
          {radioBtns.map((item, index) => (
            <div key={item + index} className="flex items-center space-x-1">
              <input
                type="radio"
                id={item}
                name="title"
                value={item}
                onChange={handleChange}
                checked={state.details.title === item}
                required
              />
              <label
                htmlFor={item}
                className="text-xs font-medium text-gray-500 capitalize"
              >
                {item}
              </label>
            </div>
          ))}
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 space-y-2 sm:grid-cols-2 gap-x-4 gap-y-2">
          {fields.map((item, index) => {
            const type = item.includes("email")
              ? "email"
              : item.includes("phone")
              ? "tel"
              : item.includes("date") || item.includes("appointment")
              ? "date"
              : "text";

            return (
              <div
                key={item + index}
                className={`flex flex-col ${
                  item.includes("date") ? "col-span-1 sm:col-span-2" : ""
                }`}
              >
                <label
                  htmlFor={item}
                  className="mb-1 text-xs font-medium text-left text-gray-500 capitalize"
                >
                  {item.replaceAll("_", " ")}
                </label>
                <input
                  type={type}
                  name={item}
                  id={item}
                  onChange={handleChange}
                  value={state.details[item]}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2"
                  required
                />
              </div>
            );
          })}

          <textarea
            name="message"
            rows="10"
            onChange={handleChange}
            value={state.details.message}
            className="col-span-1 sm:col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-2"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="flex items-start w-full mt-4 space-x-2 text-xs text-left">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={state.details.terms}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="terms"
            className="relative text-xs font-medium text-gray-500 capitalize -top-1"
          >
            I agree that my details from the contact form will be collected and
            processed to answer my query. Call up data protection declaration .
          </label>
        </div>
      </form>
    </div>
  );
};

export default FreeOffer;
