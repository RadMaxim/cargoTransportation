import React from "react";
import classRadio from "./css/classRadio.module.css";
export interface Radio {
  textLabel: string;
  id: string;
  start?: boolean;
}
const Radio: React.FC<Radio> = ({ textLabel, id, start }) => {
  return (
    <div className={classRadio.radio}>
      <input checked={start} type="radio" name="choice" id={id} />
      <label htmlFor={id}>{textLabel}</label>
    </div>
  );
};
export default Radio;
