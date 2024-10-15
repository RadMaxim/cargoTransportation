import classButton from './css/classButton.module.css'
import  calculate from './../../../public/icons/Calculate.svg'
import  phone from './../../../public/icons/Phone.svg'
import plus from './../../../public/icons/Plus.svg'
import minus from './../../../public/icons/minus.svg'
import galya from './../../../public/icons/galya.svg'
export interface Button{
        color:string,
        isIcon?:string,
        w:number,
        h:number,
        text?:string

}
const Button = ({color, isIcon, w, h, text}:Button)=>{;
    const iconsLink = isIcon=="calculate"?calculate:isIcon=="phone"?phone:isIcon=="plus"?plus:isIcon=="minus"?minus:isIcon=="galya"?galya:""

    return (<div className={`${classButton.button} ${classButton[color]} `} style={{width:w,height:h}}>
                <div className={classButton.button_container}>
                    {isIcon?(<img src={iconsLink} alt="" />):("")}
                    {text?(<p>{text}</p>):""}
                </div>


    </div>)
}
export default Button;