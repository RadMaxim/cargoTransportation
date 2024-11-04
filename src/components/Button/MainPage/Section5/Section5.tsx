import { useGetVideosQuery } from "../../../../store/api/api";
import Heading from "../../../heading/Heading";
import Text from "../../../Text/Text";
import Choice from "../Section3/components/Choice/Choice";
import Gallary from "../Section4/Components/Gallary";
import classSection5 from "./css/classSection5.module.css";
export interface Video {
  id?: number;
  pageURL?: string;
  type?: string;
  tags?: string;
  duration?: number;
  views?: number;
  downloads?: number;
  likes?: number;
  comments?: number;
  user?: string;
  user_id?: number;
  userImageURL?: string;
  videos?: {
    large?: {
      url?: string;
      width?: number;
      height?: number;
      size?: number;
    };
    medium?: {
      url?: string;
      width?: number;
      height?: number;
      size?: number;
    };
    small?: {
      url?: string;
      width?: number;
      height?: number;
      size?: number;
    };
    tiny?: {
      url?: string;
      width?: number;
      height?: number;
      size?: number;
    };
  };
}


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
  const {data} = useGetVideosQuery({})
 console.log(data);
 
 
  return (
    <section className={classSection5.section}>
      <div className={classSection5.section_container}>
        <section className={classSection5.section1}>
        <Heading lvl={3} mode={3}>Отзывы</Heading>

        </section>
        <section className={classSection5.section2}>
        <Text mode={1}>Грузчики от компании с опытом работы в Москве с 2013 года. Для нас ценно, что за это время у нас сформировалась большая база постоянных клиентов, рекомендующих нас другим.</Text>

        </section>
        <section className={classSection5.section3}>

        <Choice arr={section5Choice} group="section5"/>

        </section>
      <section className={classSection5.section4}>
      <Gallary height={215} width={254} arrS5={data}/>

      </section>

      </div>
     
     
    </section>
  );
};
export default Section5;
