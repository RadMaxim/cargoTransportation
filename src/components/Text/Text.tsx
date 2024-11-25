import { memo, ReactNode } from "react";
import classText from './css/classText.module.css'
const getTextClass = (mode: number): string => {
  switch (mode) {
    case 1: return classText.p116;
    case 2: return classText.p213;
    case 3: return classText.p316;
    default: return ''; 
  }
};
const Text = memo(({ children, mode }:{children:ReactNode, mode:number}) => {
  const textClass = getTextClass(mode)
  return (
    <section className={classText.section}>
      <p className={textClass}>{children}</p>
    </section>
  );
});
export default Text;
