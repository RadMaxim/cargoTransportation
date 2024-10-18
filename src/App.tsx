import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button
        type="button"
        isIcon="calculate"
        text="Рассчитать стоимость"
        h={63}
        w={343}
        color={"btn1"}
      />
      <Button type="button" text="Заказать" h={50} w={99} color={"btn1"} />
      <Button type="button" text="Заказать" h={50} w={99} color={"btn1"} />
      <Button type="button" text="Показать все" h={50} w={343} color={"btn2"} />
      <Button
        type="button"
        isIcon="calculate"
        text="Рассчитать стоимость"
        h={60}
        w={343}
        color={"btn1"}
      />
      <Button
        type="button"
        isIcon="phone"
        text="Перезвоните мне"
        h={60}
        w={343}
        color={"btn1"}
      />
      <Button type="button" isIcon="plus" h={33} w={33} color={"btn3"} />
      <Button type="button" isIcon="minus" h={33} w={33} color={"btn3"} />
      <Button type="button" isIcon="galya" h={33} w={33} color={"btn3"} />
      <Button type="button" isIcon="pagL" h={44} w={44} color={"btn4"} />
      <Button type="button" isIcon="pagR" h={44} w={44} color={"btn4"} />
      <Button type="button" isIcon="pagRLight" h={44} w={44} color={"btn5"} />
      <Button type="button" isIcon="pagRRight" h={44} w={44} color={"btn5"} />
      <Button
        type="button"
        isIcon="calculate"
        text="Заказать консультацию"
        h={50}
        w={344}
        color={"btn1"}
      />
    </>
  );
}

export default App;
