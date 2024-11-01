import Text from "../../../Text/Text";
import Button from "../../Button";
import classSection1 from "./css/classSection1.module.css";

const Section1 = () => {
  return (
    <section className={classSection1.section}>
      <div className={classSection1.section_container}>
        <section className={classSection1.section1}></section>
        <section className={classSection1.section2}><Text>Такелажные работы в Москве</Text></section>
        <section className={classSection1.section3}><Text>Выполняем любые виды работ.  Приедем за 60 минут</Text></section>
        <section className={classSection1.section4}>
          <Button
            type="button"
            isIcon="calculate"
            text="Рассчитать стоимость"
            h={"63px"}
            w={"343px"}
            color={"btn1"}
          />
        </section>
        <section className={classSection1.section5}></section>
        <section className={classSection1.section6}></section>
      </div>
    </section>
  );
};
export default Section1;
