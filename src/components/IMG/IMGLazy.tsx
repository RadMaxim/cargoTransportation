import React, { memo, PropsWithChildren } from "react";
import classIMGLoadingLazy from "./css/classIMGLoadingLazy.module.css";
import useInViewImage from "./hooks/ViewIMGHooks";
export interface IMGLoadingLazy extends PropsWithChildren{
    src?:string,
    width?:number,
    height:number
}
const IMGLoadingLazy: React.FC<IMGLoadingLazy> = memo(({ src, width, height }) => {
  
  const { ref, inView } = useInViewImage();
  console.log(src);
  
  return (
    <div ref={ref} className={classIMGLoadingLazy.main}>
      {inView ? (
          <img style={{maxWidth:`${width}%`, maxHeight:height}} className={classIMGLoadingLazy.img} src={src} alt="" />

      ) : (
        <div className={classIMGLoadingLazy.reserv}></div>
      )}
    </div>
  );
});
export default IMGLoadingLazy;
