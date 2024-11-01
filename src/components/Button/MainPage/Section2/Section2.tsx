import Text from "../../../Text/Text";
import Button from "../../Button";
import Services from "./components/Services";
import classSection2 from "./css/classSection2.module.css";
const section = [
  {
    text:"Такелажные работы 1 человек",
    price:"от 149₽"
  },
  {
    text:"Такелажные работы 4-8 человек",
    price:"от 149₽"
  },
  {
    text:"Перемещение груза до 100 кг",
    price:"от 149₽"
  }
]
const Section2 = () => {
  return (
    <section className={classSection2.section}>
      <div className={classSection2.section_container}>
        <section className={classSection2.section1}></section>
        <section className={classSection2.section2}><Text>Популярные услуги с ценами</Text></section>
        
        <section className={classSection2.section3}>
          <Services {...section[0]} />
        </section>
        <section className={classSection2.section4}>
          <Services {...section[1]} />
        </section>
        <section className={classSection2.section5}>
          <Services {...section[2]} />
        </section>
        <section className={classSection2.section6}>
          <Button
            type="button"
            text="Показать все"
            h={"50px"}
            w={"343px"}
            color={"btn2"}
          />
        </section>
      </div>
    </section>
  );
};
export default Section2;
