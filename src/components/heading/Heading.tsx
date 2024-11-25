import { memo, ReactNode } from 'react';
import classHeading from './css/classHeading.module.css'
const getHeadingLevel = (lvl: number): React.ElementType => {
    switch (lvl) {
      case 1: return 'h1';
      case 2: return 'h2';
      case 3: return 'h3';
      default: return 'h4';
    }
  };
  const getHeadingClass = (mode: number): string => {
    switch (mode) {
      case 1: return classHeading.c132;
      case 2: return classHeading.c226;
      case 3: return classHeading.c126;
      default: return ''; 
    }
  };
    
const Heading = memo(({children,lvl,mode }:{children:ReactNode,lvl:number,mode:number})=>{

const HeadingComponent = getHeadingLevel(lvl);
const className = getHeadingClass(mode);
    return (
    <section className={className}>
        <HeadingComponent>{children}</HeadingComponent>
    </section>)
})
export default Heading; 