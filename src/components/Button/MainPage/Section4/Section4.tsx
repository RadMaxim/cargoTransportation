
import classSection4 from "./css/classSection4.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./../../../../../public/galary/m1.jfif";
import img2 from "./../../../../../public/galary/m2.jfif";
import img3 from "./../../../../../public/galary/m3.jfif";
import img4 from "./../../../../../public/galary/m4.jfif";
import {  useRef, useState} from "react";
import Button from "../../Button";

const arrayImg = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
];

const Section4 = () => {
  const carouselRef = useRef<Carousel>(null);
  const [state, setState] = useState<number>(0)
  console.log(state);
  
 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(0);
      if (state+1==arrayImg.length) {
        return state
      }
      setState(s=>s+1)
      
     
      
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(0);
      if (state-1==-1) {
        return state
      }
      setState(s=>s-1)
    }
  };


  return (
    <section className={classSection4.section}>
      <div className={classSection4.section_container}>
        <section className={classSection4.section1}></section>
        <section className={classSection4.section2}>
          <Carousel  ref={carouselRef} arrows={false} responsive={responsive}>
            {arrayImg.map((elem) => (
              <div className={classSection4.imgs} key={elem.src}>
                <img className={classSection4.img} src={elem.src} alt="" />
              </div>
            ))}
          </Carousel>
        </section>
        <section className={classSection4.section3}>
        
          <Button
          numPicture={state===0}
            method={()=>handlePrev()}
            type="button"
            isIcon="pagLLight"
            h={"44px"}
            w={"44px"}
            color={"btn5"}
          />
            <Button
            numPicture={state===arrayImg.length-1}

            method={()=>handleNext()}
            type="button"
            isIcon="pagRLight"
            h={"44px"}
            w={"44px"}
            color={"btn5"}
          />
        </section>
      </div>
    </section>
  );
};
export default Section4;
