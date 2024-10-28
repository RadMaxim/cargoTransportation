import React from "react";
import classRadio from "./css/classRadio.module.css";
export interface Radio {
  textLabel: string;
  id: string;
  
}
const Radio: React.FC<Radio> = ({ textLabel, id}) => {
  return (
    <div className={classRadio.radio}>
      <input  type="radio" name="choice" id={id} />
      <label htmlFor={id}>{textLabel}</label>
    </div>
  );
};
export default Radio;
