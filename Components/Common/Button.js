import React from "react";

const Button = ({
  variant = "contained",
  children,
  onClick = () => {},
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={
        variant === "contained"
          ? "bg-primary text-background rounded-[10px] py-2 px-8 font-medium text-base leading-6"
          : "border-2 border-primary text-primary rounded-[10px] py-2 px-8 font-medium text-base leading-6"
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
