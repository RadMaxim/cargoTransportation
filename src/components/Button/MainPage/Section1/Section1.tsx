import Heading from "../../../heading/Heading";
import IMGLoadingLazy from "../../../IMG/IMGLazy";
import Text from "../../../Text/Text";
import Button from "../../Button";
import classSection1 from "./css/classSection1.module.css";
import img from "./../../../../../public/img/section1.png"
import ListItem from "../../../ListItem/ListItem";
import img1 from './img/Layer_1 (1).png'
import img2 from './img/Layer_1.png'
import img3 from './img/Layer_1 (2).png'
const Section1 = () => {
  const arrItem = [
    {
      img:img1,
      desc:"Переносим грузы от 100 кг до 50 тонн"
    },
    {
      img:img2,
      desc:"Используем специальное оборудование"
    },
    {
      img:img3,
      desc:"Предоставляем спецтехнику"
    }
  ]
  return (
    <section className={classSection1.section}>
      <div className={classSection1.section_container}>
        <section className={classSection1.section1}>

        
        </section>
        <section className={classSection1.section2}>
         <Heading lvl={1} mode={1}>Такелажные работы в Москве   </Heading>      </section>
        <section className={classSection1.section3}>
          <Text mode={1}>Выполняем любые виды работ.  Приедем за 60 минут</Text>
        </section>
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
        <section className={classSection1.section5}>  
          <IMGLoadingLazy height={400} src={img} width={100}/></section>
        <section className={classSection1.section6}>
          <ListItem wElem={85} hElem={85} mode={2}  back="black" dir="row" arrImg={arrItem}/>

        </section>
      </div>
    </section>
  );
};
export default Section1;
