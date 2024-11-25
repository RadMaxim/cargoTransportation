import Carousel from 'react-multi-carousel';
import classGallary from './css/classGallary.module.css'
import React, { useRef, useState } from 'react';
import IMGLoadingLazy from '../../../components/IMG/IMGLazy';
import Button from '../../../components/Button/Button';
import { Video } from '../../Section5/Section5';
import ReactPlayer from 'react-player';
export interface ItemGallary{
    src:string
}

export interface Gallary {
        arr?:ItemGallary[],
        arrS5?:Video[],
        width:number,
        height:number
}

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
const Gallary:React.FC<Gallary> = ({ arr, arrS5, width, height})=>{
    const carouselRef = useRef<Carousel>(null);
  const [state, setState] = useState<number>(0);

  
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(0);
      if (state + 1 == arr?.length) {
        return state;
      }
      setState((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous(0);
      if (state - 1 == -1) {
        return state;
      }
      setState((s) => s - 1);
    }
  };  

    return ( <> 
    <section className={classGallary.section2}>
        {arr&&
        <Carousel itemClass={classGallary.item} partialVisbile={false} ref={carouselRef} arrows={false} responsive={responsive}>
          {arr&&arr.map((elem) => (
            <div className={classGallary.imgs} key={elem.src}>
              <IMGLoadingLazy height={height} width={width} src={elem.src}/>
            </div>
          ))}
          {arrS5&&arrS5.map((elem) => (
            <div className={classGallary.imgs} key={elem.id}>
              <IMGLoadingLazy height={height} width={width} src={elem.userImageURL}/>
            </div>
          ))}
        </Carousel>}
       {
       arrS5&&<Carousel className={classGallary.items} itemClass={classGallary.item} partialVisbile={false} ref={carouselRef} arrows={false} responsive={responsive}>
       {arrS5.map((elem) => (
            <div className={classGallary.imgs} key={elem.id}>
              <ReactPlayer playIcon={<IMGLoadingLazy height={215} width={253} src={elem.videos?.medium?.thumbnail}/>
} width={254} height={215} url={elem.videos?.small?.url} playing light/>
            </div>
          ))}
       </Carousel>
    }
      </section>
      <section className={classGallary.section3}>
      
        <Button
          numPicture={state === 0}
          method={() => handlePrev()}
          type="button"
          isIcon="pagLLight"
          h={"44px"}
          w={"44px"}
          color={"btn1"}
        />
       {
            arr&&(<Button
                numPicture={state ===arr.length - 1}
                method={() => handleNext()}
                type="button"
                isIcon="pagRLight"
                h={"44px"}
                w={"44px"}
                color={"btn1"}
              />)
              
        } 
        {arrS5&&(<Button
                numPicture={state ===arrS5.length - 1}
                method={() => handleNext()}
                type="button"
                isIcon="pagRLight"
                h={"44px"}
                w={"44px"}
                color={"btn1"}
              />)}
       
      </section></>
    )
}
export default Gallary;