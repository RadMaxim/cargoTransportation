import classSection3 from "./css/classSection3.module.css";

import Choice from "./components/Choice/Choice";
import Forms from "./components/Forms/Forms";
import Text from "../../../Text/Text";
import Heading from "../../../heading/Heading";
const section3Choice = [{
  textLabel:"Грузчики",
  id:"porter"
},
{
  textLabel:"Такелаж",
  id:"Rigging"
},
{
  textLabel:"Переезд",
  id:"Moving"
},
{
  textLabel:"Разнорабочие",
  id:"Handymen"
},
]
const Section3 = () => {
  return (
    <section className={classSection3.section}>
      <div className={classSection3.section_container}>
        <section className={classSection3.section1}>
         <Heading lvl={3} mode={3}>Онлайн калькулятор</Heading> 
        </section>
        <section className={classSection3.section2}>
          <Text mode={1}>
            Введите данные для предварительного расчета стоимости заказа услуги
            «Грузчики» и получите скидку до 10% на первый заказ.
          </Text>
        </section>
        <section className={classSection3.section3}>
          <Choice arr={section3Choice} group="section3" />
        </section>
        <section className={classSection3.section4}>
          <Forms />
        </section>
      </div>
    </section>
  );
};
export default Section3;
