import React from "react";
import { useFormContext } from "react-hook-form";

import * as globalConstants from "utils/constants";

const { INPUT_TYPES } = globalConstants;

const Input = ({
  name,
  placeholder,
  className = "",
  type = INPUT_TYPES.TEXT,
  label,
  error,
  required = false,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldTypes = {
    [INPUT_TYPES.TEXT || INPUT_TYPES.NUMBER]: (
      <div className="w-full">
        <p className="text-sm font-medium">
          {label}
          {required && label && <span className="text-error">*</span>}
        </p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${className} mt-1 w-full px-2 py-3 rounded-[5px] border-border border-2   `}
          {...register(name, { required })}
          {...rest}
        />
        {errors && errors[name] && errors[name].message && (
          <p className="text-error text-xs">{errors[name]?.message}</p>
        )}
      </div>
    ),
    [INPUT_TYPES.RADIO]: (
      <>
        <div className="flex items-center">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={`${className} mt-1 px-2 py-3 rounded-[5px] border-border border-2   `}
            {...register(name, { required })}
            {...rest}
          />
          <span className="text-sm text-placeholder ml-1">{label}</span>
        </div>
        {errors && errors[name] && errors[name].message && (
          <p className="text-error text-xs">{errors[name]?.message}</p>
        )}
      </>
    ),
  };

  return fieldTypes[type] || fieldTypes[INPUT_TYPES.TEXT];
};

export default Input;
