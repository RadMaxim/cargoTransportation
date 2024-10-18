import Button from "../../Button";
import classSection3 from "./css/classSection3.module.css";

const Section3 = () => {
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
            <div>
              <p>Грузчики</p>
            </div>
            <div>
              <label htmlFor="tentacles"></label>
              <input
                type="number"
                id="tentacles"
                name="tentacles"
                min="10"
                max="100"
              />
            </div>
          </section>
          <section className={classSection3.date}>
            <div>
              <p>Дата/время</p>
              <input type="date" />
            </div>
          </section>
          <section className={classSection3.times}>
            <div>
              <p>Кол-во часов</p>
            </div>
            <div>
              {" "}
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
              <Button type="button" isIcon="galya" h={33} w={33} color={"btn3"} />

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
            h={60}
            w={343}
            color={"btn1"}
          />
        </form>
      </div>
    </section>
  );
};
export default Section3;
