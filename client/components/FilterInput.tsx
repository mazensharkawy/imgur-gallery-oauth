import React from "react";
import { Dispatch } from "react";

export default ({
  onChange,
  value,
  title,
  options,
}: {
  onChange: any;
  value: string;
  title: string;
  options: string[];
}): JSX.Element => {
  return (
    <div className="">
      <label>{title}</label>
      <select name="title" onChange={onChange} value={value}>
        {options.map((value) => (
          <option key={value} value={value}>
            {" "}
            {value}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
