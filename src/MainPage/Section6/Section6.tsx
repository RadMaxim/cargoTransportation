import Heading from "../../components/heading/Heading";
import ListItem from "../../components/ListItem/ListItem";
import Text from "../../components/Text/Text";
import classSection6 from "./css/classSection6.module.css";
import img1 from "./img/Group (1).png"
import img2 from "./img/Layer_1 (3).png"
import img3 from "./img/Layer_1 (4).png"
import img4 from "./img/Layer_1 (5).png"
const listItems = [{
img:img1,
desc:"Соблюдаем технику безопасности"
    
},
{
  img:img2,
  desc:"Материальная ответственность прописана в договоре"
      
  },
  {
    img:img3,
    desc:"Используем современное специализированное оборудование"
        
    },
    {
      img:img4,
      desc:"Сотрудничаем со страховыми компаниями"
          
      }]
const Section6 = () => {

  return (
    <section className={classSection6.section}>
      <div className={classSection6.section_container}>
<Heading lvl={3} mode={2}>Сохранность груза - главная задача</Heading>
<Text mode={3}>Гарантируем сохранность груза на всех этапах работ</Text>
        <ListItem wElem={100} hElem={100} mode={3} back="white" dir="col" arrImg={listItems}/>
      </div>
    </section>
  );
};
export default Section6;
