import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        type="button"
        isIcon="calculate"
        text="Рассчитать стоимость"
        h={"63px"}
        w={"343px"}
        color={"btn1"}
      />
      <Button type="button" text="Заказать" h={"50px"} w={"99px"} color={"btn1"} />
      <Button type="button" text="Заказать" h={"50px"} w={"99px"} color={"btn1"} />
      <Button type="button" text="Показать все" h={"50px"} w={"343px"} color={"btn2"} />
      <Button
        type="button"
        isIcon="calculate"
        text="Рассчитать стоимость"
        h={"60px"}
        w={"343px"}
        color={"btn1"}
      />
      <Button
        type="button"
        isIcon="phone"
        text="Перезвоните мне"
        h={"60px"}
        w={"343px"}
        color={"btn1"}
      />
      <Button type="button" isIcon="plus" h={"33px"} w={"33px"} color={"btn3"} />
      <Button type="button" isIcon="minus" h={"33px"} w={"33px"} color={"btn3"} />
      <Button type="button" isIcon="galya" h={"33px"} w={"33px"} color={"btn3"} />
      <Button type="button" isIcon="pagL" h={"44px"} w={"44px"} color={"btn4"} />
      <Button type="button" isIcon="pagR" h={"44px"} w={"44px"} color={"btn4"} />
      <Button type="button" isIcon="pagRLight" h={"44px"} w={"44px"} color={"btn5"} />
      <Button type="button" isIcon="pagRRight" h={"44px"} w={"44px"} color={"btn5"} />
      <Button
        type="button"
        isIcon="calculate"
        text="Заказать консультацию"
        h={"50px"}
        w={"344px"}
        color={"btn1"}
      />
    </>
  );
}

export default App;
