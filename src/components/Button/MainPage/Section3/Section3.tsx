import classSection3 from "./css/classSection3.module.css";

import Choice from "./components/Choice/Choice";
import Forms from "./components/Forms/Forms";

const Section3 = () => {
  return (
    <section className={classSection3.section}>
      <div className={classSection3.section_container}>
        <section className={classSection3.section1}></section>
        <section className={classSection3.section2}></section>
        <section className={classSection3.section3}>
          <Choice />
        </section>
        <section className={classSection3.section4}>
          <Forms />
        </section>
      </div>
    </section>
  );
};
export default Section3;
