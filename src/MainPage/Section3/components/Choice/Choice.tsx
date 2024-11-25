import React from "react";
import classChoice from "./css/classChoice.module.css";
import Radio from "./Radio/Radio";
export interface ChoiceElem{
  textLabel:string,
  id:string
}
export interface Choice{
  group:string
  arr:ChoiceElem[]
} 
const Choice:React.FC<Choice> = ({group,arr}) => {
  return (
    <section className={classChoice.choice}>
      <div className={classChoice.choice_container}>
        {arr.map((elem)=><Radio group={group} textLabel={elem.textLabel} id={elem.id} key={elem.id} />
)}
         </div>
    </section>
  );
};
export default Choice;
