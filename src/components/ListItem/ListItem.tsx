import React from 'react'
import classListItem from './css/classListItem.module.css'
import Item from './Item/Item'
export interface ItemOfList{
    img:string,
    desc:string
}

export interface ListItem{
    arrImg:ItemOfList[],
    dir:"col"|"row",
    back:"white"|"black",
    mode:1|2|3,
    wElem:number,
    hElem:number
} 
const ListItem:React.FC<ListItem> = ({arrImg,dir, back,mode, wElem, hElem})=>{

    return (
    <ul className={`${classListItem.list}  ${classListItem[dir]}`}>{arrImg.map((elem)=>(<Item w={wElem} key={elem.img} h={hElem} mode={mode}  back={back} {...elem}/>))}</ul>
   
    )
}
export default ListItem;