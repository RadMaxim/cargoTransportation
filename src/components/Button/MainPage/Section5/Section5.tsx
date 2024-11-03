import Heading from "../../../heading/Heading";
import Text from "../../../Text/Text";
import Choice from "../Section3/components/Choice/Choice";
import classSection5 from "./css/classSection5.module.css";
const section5Choice = [{
  textLabel:"Видео отзывы",
  id:"Video reviews"
},
{
  textLabel:"Аудио отзывы",
  id:"Audio reviews"
},
{
  textLabel:"Отзывы из интернета",
  id:"Reviews from the Internet"
},
{
  textLabel:"Отзывы из TenChat",
  id:"Reviews from TenChat"
},
{
  textLabel:"Ваши отзывы",
  id:"Your feedback"
},
]
const Section5 = () => {
  return (
    <section className={classSection5.section}>
      <div className={classSection5.section_container}>
        <Heading lvl={3} mode={3}>Отзывы</Heading>
        <Text mode={1}>Грузчики от компании с опытом работы в Москве с 2013 года. Для нас ценно, что за это время у нас сформировалась большая база постоянных клиентов, рекомендующих нас другим.</Text>
      <Choice arr={section5Choice} group="section5"/>
      </div>
    </section>
  );
};
export default Section5;
