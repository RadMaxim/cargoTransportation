// import React, { Children, cloneElement, PropsWithChildren, useEffect, useState } from 'react';
// import classCarousel from './css/classCarousel.module.css'
// import Button from '../../../Button';

// const Carousel:React.FC<PropsWithChildren> = ({children})=>{
//     const [numPicture, setNumPicture] = useState([]); 
//     useEffect(()=>{
//         setNumPicture(
//             Children.map(children, child =>{
//                 return cloneElement(child,{
//                     style:{
//                         height:'100%',
//                     }
//                 })
//             })
//         )
//     })
   
//     return (
//         <div className={classCarousel.gallary}>
//     <div  className={classCarousel.gallary_container}>

    
//     {children}</div>
//     <Button
       
      
//         type="button"
//         isIcon="pagRLight"
//         h={"44px"}
//         w={"44px"}
//         color={"btn5"}
//       />
// <Button

//         type="button"
//         isIcon="pagLLight"
//         h={"44px"}
//         w={"44px"}
//         color={"btn5"}
//       />
    
//     </div>)
// }
// export default Carousel;