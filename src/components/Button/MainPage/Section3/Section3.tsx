import { useState } from "react";
import Button from "../../Button";
import classSection3 from "./css/classSection3.module.css";
import moversIMG from "./../../../../../public/icons/formsIcons/movers.svg";
import hourImg from "./../../../../../public/icons/formsIcons/Hour.svg"
import rectangles from "./../../../../../public/icons/formsIcons/rectangles.svg"
export interface Form{
  movers:number,
  hour:number
}
const Section3 = () => {
  const [count, setCount] = useState<Form>({movers:0,hour:0});
  const {movers,hour} = count
  const changeMovers = (delta: number) => {
    if (movers + delta > 11 || movers + delta < 0) {
      return;
    }
    setCount(()=>({...count,movers:movers+delta}));
  
  };
  const changeHour = (delta: number) => {
    if (movers + delta > 11 || movers + delta < 0) {
      return;
    }
    setCount(()=>({...count,hour:hour+delta}));
  
  };
  const allAuto = [
    { value: "BMV" },
    { value: "BMV" },
    { value: "BMV" },
    { value: "BMV" },
  ];

  return (
    <section className={classSection3.section}>
      <div className={classSection3.section_container}>
        <form>
          <section className={classSection3.movers}>
            <div className={classSection3.counter}>
              <div>
                <p>Грузчики</p>
              </div>
              <div className={classSection3.img1}>
                <img src={moversIMG} alt="" /> <p>{movers}</p>
              </div>
            </div>
            <div className={classSection3.buttons}>
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

          <section className={classSection3.date}>
            <div>
              <p>Дата/время</p>
              {/* <input type="date" name="" id="" /> */}

              {/* <DatePicker
                selected={startDate}
                locale="pt-BR"
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="Pp"
              /> */}
            </div>
          </section>
          <section className={classSection3.times}>
          
            <div className={classSection3.counter}>
              <div>
                <p>Кол-во часов</p>
              </div>
              <div className={classSection3.img1}>
                <img src={hourImg} alt="" /> <p>{hour}</p>
              </div>
            </div>
            <div className={classSection3.buttons}>
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
          <section className={classSection3.service}>
            <div>
              <img src={rectangles} alt="" />
              <label htmlFor="open">Дополнительные услуги</label>
              <input type="radio" name="openOrClose" id="open" />
              <section className={classSection3.allServices}>
                <h2>allServices</h2>
                <label htmlFor="close">close</label>
                <input type="radio" name="openOrClose" id="close" />
              </section>
            </div>
            <div>4</div>
          </section>
          <section className={classSection3.typeWork}>
            <div>
              <img src={moversIMG} alt="" />
              <label htmlFor="openWorker">Тип работ</label>
              <input type="radio" name="openOrCloseWorker" id="openWorker" />
              <section className={classSection3.allTypeJob}>
                <h2>allTypeJob</h2>
                <label htmlFor="closeWorker">close</label>
                <input type="radio" name="openOrCloseWorker" id="closeWorker" />
              </section>
            </div>
          </section>
          <section className={classSection3.cars}>
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

          <section className={classSection3.names}>
            <div>
              <input type="text" placeholder="Имя" />
            </div>
          </section>
          <section className={classSection3.phone}>
            <div>
              <input placeholder="+7" type="tel" />
            </div>
          </section>
          <Button
            type="button"
            isIcon="calculate"
            text="Рассчитать стоимость"
            h={"60px"}
            w={"343px"}
            color={"btn1"}
          />
        </form>
      </div>
    </section>
  );
};
export default Section3;
