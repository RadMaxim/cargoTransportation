import React, { PropsWithChildren } from 'react';
import classHeading from './css/classHeading.module.css'
export interface Heading extends PropsWithChildren{
    lvl?:number,
    mode?:number

}
const Heading:React.FC<Heading> = ({children,lvl,mode })=>{
const prop = {
    mode:mode==1?"c132":mode==2?"c226":mode==3?"c126":""
}
    return (<section className={classHeading[prop.mode]}>
       {lvl==1?<h1>{children}</h1>:lvl==2? <h2>{children}</h2>:lvl==3?<h3>{children}</h3>:<h4>{children}</h4>
}
       
        


    </section>)
}
export default Heading; 