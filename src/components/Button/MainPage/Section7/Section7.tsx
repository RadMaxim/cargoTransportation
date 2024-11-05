import { useForm } from "react-hook-form";
import Heading from "../../../heading/Heading";
import IMGLoadingLazy from "../../../IMG/IMGLazy";
import Text from "../../../Text/Text";
import DifferentInputs from "../Section3/components/DifferentInputs";
import classSection7 from "./css/classSection7.module.css";
import img1 from "./img/IMG_3107 1.png"
import Button from "../../Button";
const Section7 = () => {
  const { register } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  return (
    <section className={classSection7.section}>
      <div className={classSection7.section_container}>
        <section className={classSection7.section1}>
        <Heading lvl={3} mode={2}>У вас есть вопросы?</Heading>

        </section>
        <section className={classSection7.section2}>
        <Text mode={3}>Оставьте телефон и мы вам перезвоним</Text>

        </section>
        <section className={classSection7.section3}>
        <DifferentInputs register={register} names="phone" type="tel" pl="+7" />

        </section>
        <section className={classSection7.section4}>
        <Button
        type="button"
        isIcon="phone"
        text="Перезвоните мне"
        h={"60px"}
        w={"343px"}
        color={"btn1"}
      />
        </section>
        <section className={classSection7.section5}>
          <Text>Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных</Text>
        </section>
        <section className={classSection7.section6}>
        <IMGLoadingLazy src={img1} width={100} height={231}/>

        </section>
     
      </div>
    </section>
  );
};
export default Section7;
