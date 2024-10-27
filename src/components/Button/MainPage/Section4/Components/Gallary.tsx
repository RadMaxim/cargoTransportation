import classGallary from "./css/classGallary.module.css";
// import img from "./../../../../../../public/galary/m1.jfif";
import img1 from "./../../../../../../public/galary/m1.jfif";
import img2 from "./../../../../../../public/galary/m2.jfif";
import img3 from "./../../../../../../public/galary/m3.jfif";
import img4 from "./../../../../../../public/galary/m4.jfif";
const arrayImg = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
];
const Gallary = () => {
  return (
    <div className={classGallary.gallary}>
        <div className={classGallary.gallary_container}>

 {arrayImg.map((elem) => (
        <div className={classGallary.imgs} key={elem.src}>
          <img className={classGallary.img} src={elem.src} alt="" />
        </div>
      ))}

        </div>
     
    </div>
  );
};
export default Gallary;
