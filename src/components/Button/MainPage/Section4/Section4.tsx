import Button from "../../Button";
import Gallary from "./Components/Gallary";
import classSection4 from "./css/classSection4.module.css";

const Section4 = () => {
  return (
    <section className={classSection4.section}>
      <div className={classSection4.section_container}>
        <section className={classSection4.section1}></section>
        <section className={classSection4.section2}>
          <Gallary />
        </section>
        <section className={classSection4.section3}>
          <Button
            type="button"
            isIcon="pagRLight"
            h={"44px"}
            w={"44px"}
            color={"btn5"}
          />
          <Button
            type="button"
            isIcon="pagRRight"
            h={"44px"}
            w={"44px"}
            color={"btn5"}
          />
        </section>
      </div>
    </section>
  );
};
export default Section4;
