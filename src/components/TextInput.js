import React from "react";

export const TextInput = ({type, placeholder, name, value, onChange}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
export default TextInput;
