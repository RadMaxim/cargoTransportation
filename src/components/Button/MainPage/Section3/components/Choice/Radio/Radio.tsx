import React from "react";
import classRadio from "./css/classRadio.module.css";
export interface Radio {
  textLabel: string;
  id: string;
  group:string
}
const Radio: React.FC<Radio> = ({ textLabel, id,group  }) => {
  return (
    <div className={classRadio.radio}>
      <input type="radio" name={group} id={id} />
      <label htmlFor={id}>{textLabel}</label>
    </div>
  );
};
export default Radio;
