import { PropsWithChildren } from 'react';
import classItem from './css/classItem.module.css'
import Text from '../../Text/Text';
export interface ItemOfList extends PropsWithChildren{
    img:string,
    desc:string,
    back:"white"|"black",
    mode:1|2|3,
    w:number,
    h:number
}

const Item = ({img, desc,back, mode, w, h}:ItemOfList)=>{

    return (<li className={classItem.li}>
        <div style={{width:w, height:h}} className={classItem[back]}>  
            <img src={img} alt="" />
            </div>
      <Text mode={mode}>{desc}</Text>
</li>)
}
export default Item;