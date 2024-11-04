import classSection4 from "./css/classSection4.module.css";
import "react-multi-carousel/lib/styles.css";
import img1 from "./../../../../../public/galary/m1.jfif";
import img2 from "./../../../../../public/galary/m2.jfif";
import img3 from "./../../../../../public/galary/m3.jfif";
import img4 from "./../../../../../public/galary/m4.jfif";
import Heading from "../../../heading/Heading";
import Gallary from "./Components/Gallary";

const arrayImg = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }];

const Section4 = () => {
 


  return (
    <section className={classSection4.section}>
      <div className={classSection4.section_container}>
        <section className={classSection4.section1}>
          <Heading mode={2} lvl={3}>Фотогалерея</Heading>
        </section>
        <Gallary width={232} height={175} arr={arrayImg}/>
      </div>
    </section>
  );
};
export default Section4;
