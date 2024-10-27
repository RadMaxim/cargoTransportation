import classGallary from "./css/classGallary.module.css";
// import img from "./../../../../../../public/galary/m1.jfif";
const arrayImg = [
  { src: "./../../../../../../public/galary/m1.jfif" },
  { src: "./../../../../../../public/galary/m2.jfif" },
  { src: "./../../../../../../public/galary/m3.jfif" },
  { src: "./../../../../../../public/galary/m4.jfif" },
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
