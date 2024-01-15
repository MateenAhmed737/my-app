import React from "react";

const Button = ({
  type = "button",
  title = "",
  children,
  className = "",
  loading = false,
  ...props
}) => {
  const buttonParams = {
    type,
    className: `px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:saturate-0 ${className}`,
    ...props,
  };

  return (
    <button {...buttonParams}>
      {title}
      {children}
    </button>
  );
};

export default Button;
