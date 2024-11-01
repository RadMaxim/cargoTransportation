// import classGallary from "./css/classGallary.module.css";
// // import img from "./../../../../../../public/galary/m1.jfif";
// import img1 from "./../../../../../../public/galary/m1.jfif";
// import img2 from "./../../../../../../public/galary/m2.jfif";
// import img3 from "./../../../../../../public/galary/m3.jfif";
// import img4 from "./../../../../../../public/galary/m4.jfif";
// import Button from "../../../Button";
// import { useRef, useState } from "react";
// import Carousel from "react-multi-carousel";
// // import IMGLoadingLazy from "../../../../IMG/IMGLazy";
// const arrayImg = [
//   { src: img1 },
//   { src: img2 },
//   { src: img3 },
//   { src: img4 },
// ];

// const Gallary = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const carouselRef = useRef<Carousel>(null);

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const handleNext = () => {
//     if (carouselRef.current) {
//       carouselRef.current.next();
//       console.log(carouselRef.current);

//     }
//   };

//   const handlePrev = () => {
//     if (carouselRef.current) {
//       carouselRef.current.previous();
//       console.log("prev");

//     }
//   };

//   const ref = useRef<HTMLDivElement>(null)
//   const scroll = ref.current?.scrollLeft;
//   // console.dir(ref.current?.scrollLeft);
//   const refChild = useRef<HTMLDivElement>(null)
//   // console.dir(refChild.current?.clientWidth);
//   const wElem =refChild.current?.clientWidth;
//   console.log(scroll,wElem);

//   return (<> <div className={classGallary.gallary}>
//     <div ref={ref} className={classGallary.gallary_container}>
//     <Carousel ref={carouselRef} arrows={false} responsive={responsive}>
//     {arrayImg.map((elem) => (
//     <div ref={refChild} className={classGallary.imgs} key={elem.src}>
//       {/* <IMGLoadingLazy> */}
//       <img  className={classGallary.img} src={elem.src} alt="" />
//       {/* </IMGLoadingLazy> */}

//     </div>
//   ))}
//           </Carousel>

//     </div>
//     <Button
//             method={handleNext}
//             numPicture={currentSlide === arrayImg.length - 1}
//             type="button"
//             isIcon="pagRLight"
//             h={"44px"}
//             w={"44px"}
//             color={"btn5"}
//           />
//           <Button
//             method={handlePrev}
//             // numPicture={currentSlide === 0}
//             type="button"
//             isIcon="pagLLight"
//             h={"44px"}
//             w={"44px"}
//             color={"btn5"}
//           />
// </div>

//  </>

//   );
// };
// export default Gallary;
