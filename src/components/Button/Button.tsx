import classButton from './css/classButton.module.css'
import  calculate from './../../../public/icons/Calculate.svg'
import  phone from './../../../public/icons/Phone.svg'
import plus from './../../../public/icons/Plus.svg'
import minus from './../../../public/icons/minus.svg'
import galya from './../../../public/icons/galya.svg'
import pagL from './../../../public/icons/PaginLeft.svg'
import pagR from './../../../public/icons/PaginRight.svg'
import pagLLight from './../../../public/icons/leftLight.svg'
import pagRLight from './../../../public/icons/rightLight.svg'

import { memo } from 'react'

export interface Button{
        color:string,
        isIcon?:string,
        w:number,
        h:number,
        text?:string,
        type:"button"|"submit"

}
const Button = memo(({color, isIcon, w, h, text,type}:Button)=>{;
    const iconsLink = isIcon=="calculate"?calculate:isIcon=="phone"?phone:isIcon=="plus"?plus:isIcon=="minus"?minus:isIcon=="galya"?galya:isIcon=="pagL"?pagL:isIcon=="pagR"?pagR:isIcon=="pagRLight"?pagRLight:isIcon=="pagRRight"?pagRLight:""

    return (<button type={type} className={`${classButton.button} ${classButton[color]} `} style={{width:w,height:h}}>
                <div className={classButton.button_container}>
                    {isIcon?(<img src={iconsLink} alt="" />):("")}
                    {text?(<p>{text}</p>):""}
                </div>


    </button>)
})
export default Button;