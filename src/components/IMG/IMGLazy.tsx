import React from 'react';
import classIMGLoadingLazy from './css/classIMGLoadingLazy.module.css'
import useInViewImage from './hooks/ViewIMGHooks';

const IMGLoadingLazy:React.FC<React.PropsWithChildren> = ({children})=>{
    const {ref, inView} = useInViewImage()
    return (<div ref={ref} className={classIMGLoadingLazy.main}>
        {inView?(<>{children}</>):(<div className={classIMGLoadingLazy.reserv}></div>)}

    </div>)
}
export default IMGLoadingLazy;