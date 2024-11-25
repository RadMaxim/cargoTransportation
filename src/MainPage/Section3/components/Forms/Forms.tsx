import { useDispatch } from "react-redux";
import classForms from "./css/classForms.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form } from "../../../../../AllInterface/Interface.tsx";
import { saveDataFromForm } from "../../../../store/counterSlice.ts";

import moversIMG from "./../../../../../public/icons/formsIcons/movers.svg";
import hourImg from "./../../../../../public/icons/formsIcons/Hour.svg";
import rectangles from "./../../../../../public/icons/formsIcons/rectangles.svg";
import Button from "../../../../components/Button/Button.tsx";
import DiffLabelRadio from "../DiffLabelRadio.tsx";
import { allAuto } from "../auto.ts";
import DifferentInputs from "../DifferentInputs.tsx";
const Forms = () => {
  const disp = useDispatch();

  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const [count, setCount] = useState<Form>({ movers: 0, hour: 0 });
  const { movers, hour } = count;
  const changeMovers = (delta: number) => {
    if (movers + delta > 11 || movers + delta < 0) {
      return;
    }
    setCount(() => ({ ...count, movers: movers + delta }));
  };
  const changeHour = (delta: number) => {
    if (hour + delta > 11 || hour + delta < 0) {
      return;
    }
    setCount(() => ({ ...count, hour: hour + delta }));
  };
  const handleSub = (data: any, event: any) => {
    event.preventDefault();
    console.log("data");

    console.log(data);
    disp(saveDataFromForm({ ...data, ...count }));
  };
  return (
    <form onSubmit={handleSubmit(handleSub)}>
      <section className={classForms.movers}>
        <div className={classForms.counter}>
          <div>
            <p>Грузчики</p>
          </div>
          <div className={classForms.img1}>
            <img src={moversIMG} alt="" /> <p>{movers}</p>
          </div>
        </div>
        <div className={classForms.buttons}>
          <div onClick={() => changeMovers(1)}>
            <Button
              type="button"
              isIcon="plus"
              h={"33px"}
              w={"33px"}
              color={"btn3"}
            />
          </div>
          <div onClick={() => changeMovers(-1)}>
            <Button
              type="button"
              isIcon="minus"
              h={"33px"}
              w={"33px"}
              color={"btn3"}
            />
          </div>
        </div>
      </section>
      <section className={classForms.date}>
        <div>
          <p>Дата/время</p>
        </div>
      </section>
      <section className={classForms.times}>
        <div className={classForms.counter}>
          <div>
            <p>Кол-во часов</p>
          </div>
          <div className={classForms.img1}>
            <img src={hourImg} alt="" /> <p>{hour}</p>
          </div>
        </div>
        <div className={classForms.buttons}>
          <div onClick={() => changeHour(1)}>
            <Button
              type="button"
              isIcon="plus"
              h={"33px"}
              w={"33px"}
              color={"btn3"}
            />
          </div>
          <div onClick={() => changeHour(-1)}>
            <Button
              type="button"
              isIcon="minus"
              h={"33px"}
              w={"33px"}
              color={"btn3"}
            />
          </div>
        </div>
      </section>
      <section className={classForms.service}>
        <div>
          <img src={rectangles} alt="" />
          <DiffLabelRadio
            textLabel="Дополнительные услуги"
            id="open"
            name="openOrClose"
          />
          <section className={classForms.allServices}>
            <h2>allServices</h2>
            <DiffLabelRadio textLabel="close" id="close" name="openOrClose" />
          </section>
        </div>
        <div>4</div>
      </section>
      <section className={classForms.typeWork}>
        <div>
          <img src={moversIMG} alt="" />
          <DiffLabelRadio
            textLabel="Тип работ"
            id="openWorker"
            name="openOrCloseWorker"
          />
          <section className={classForms.allTypeJob}>
            <h2>allTypeJob</h2>
            <DiffLabelRadio
              textLabel="close"
              id="closeWorker"
              name="openOrCloseWorker"
            />
          </section>
        </div>
      </section>
      <section className={classForms.cars}>
        <div>
          <select>
            {allAuto.map((val, index) => {
              return (
                <option key={index} value={val.value}>
                  {val.value}
                </option>
              );
            })}
          </select>
          <Button
            type="button"
            isIcon="galya"
            h={"33px"}
            w={"33px"}
            color={"btn3"}
          />
        </div>
      </section>

      <section className={classForms.names}>
        <DifferentInputs
          register={register}
          names="name"
          type="text"
          pl="Имя"
        />
      </section>
      <section className={classForms.phone}>
        <DifferentInputs register={register} names="phone" type="tel" pl="+7" />
      </section>
      <Button
        type="submit"
        isIcon="calculate"
        text="Рассчитать стоимость"
        h={"60px"}
        w={"343px"}
        color={"btn1"}
      />
    </form>
  );
};
export default Forms;
