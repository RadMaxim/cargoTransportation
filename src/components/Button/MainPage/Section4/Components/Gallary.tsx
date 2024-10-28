import classGallary from "./css/classGallary.module.css";
// import img from "./../../../../../../public/galary/m1.jfif";
import img1 from "./../../../../../../public/galary/m1.jfif";
import img2 from "./../../../../../../public/galary/m2.jfif";
import img3 from "./../../../../../../public/galary/m3.jfif";
import img4 from "./../../../../../../public/galary/m4.jfif";
import Button from "../../../Button";
import { useRef, useState } from "react";
// import IMGLoadingLazy from "../../../../IMG/IMGLazy";
const arrayImg = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
];

const Gallary = () => {
  const [numPicture, setNumPicture] = useState(0); 
  const ref = useRef<HTMLDivElement>(null)
  const scroll = ref.current?.scrollLeft;
  // console.dir(ref.current?.scrollLeft);
  const refChild = useRef<HTMLDivElement>(null)
  // console.dir(refChild.current?.clientWidth);
  const wElem =refChild.current?.clientWidth;
  console.log(scroll,wElem);
  // if (!scroll || !wElem) {
  //   return
  // }
  // console.log(Math.round(scroll/wElem));
  
  
  
  // console.log(numPicture);
  const changeNum =  (delta:number) =>{
        setNumPicture(num=>num+delta)
       
        
  }
  return (<> <div className={classGallary.gallary}>
    <div ref={ref} className={classGallary.gallary_container}>

{arrayImg.map((elem) => (
    <div ref={refChild} className={classGallary.imgs} key={elem.src}>
      {/* <IMGLoadingLazy> */}
      <img  className={classGallary.img} src={elem.src} alt="" />
      {/* </IMGLoadingLazy> */}
      
    </div>
  ))}

    </div>
    <Button
        method={()=>changeNum(1)}
        numPicture={numPicture==arrayImg.length-1}
        type="button"
        isIcon="pagRLight"
        h={"44px"}
        w={"44px"}
        color={"btn5"}
      />
<Button
method={()=>changeNum(-1)}
      numPicture = {numPicture ==0 }
        type="button"
        isIcon="pagLLight"
        h={"44px"}
        w={"44px"}
        color={"btn5"}
      />
</div>

 </>
      
   
  );
};
export default Gallary;
