import { useState } from "react";
import Button from "../../Button";
import classSection3 from "./css/classSection3.module.css";
import movers from "./../../../../../public/icons/formsIcons/movers.svg";

const Section3 = () => {
  const [count, setCount] = useState(0);
  const changeCount = (delta: number) => {
    if (count + delta > 11 || count + delta < 0) {
      return;
    }
    setCount((count) => count + delta);
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
                <img src={movers} alt="" /> <p>{count}</p>
              </div>
            </div>
            <div className={classSection3.buttons}>
              <div onClick={() => changeCount(1)}>
                <Button
                  type="button"
                  isIcon="plus"
                  h={"33px"}
                  w={"33px"}
                  color={"btn3"}
                />
              </div>
              <div onClick={() => changeCount(-1)}>
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
            <div>
              <p>Кол-во часов</p>
            </div>
            <div>
              <input type="number" />
            </div>
          </section>
          <section className={classSection3.service}>
            <div>
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
