
import './App.css'
import Button from './components/Button/Button'

function App() {
 

  return (
    <>
    <Button isIcon='calculate' text='Рассчитать стоимость' h={63} w={343} color={"btn1"}/>
    <Button text='Заказать' h={50} w={99} color={"btn1"}/>
    <Button text='Заказать' h={50} w={99} color={"btn1"} />
    <Button text='Показать все' h={50} w={343} color={"btn2"}/>
    <Button isIcon='calculate' text='Рассчитать стоимость' h={60} w={343} color={"btn1"}/>
    <Button isIcon='phone' text='Перезвоните мне' h={60} w={343} color={"btn1"}/>
    <Button isIcon='plus'  h={33} w={33} color={"btn3"}/>
    <Button isIcon='minus'  h={33} w={33} color={"btn3"}/>
    <Button isIcon='galya'  h={33} w={33} color={"btn3"}/>

    </>
  )
}

export default App
