import React, { PropsWithChildren } from "react";
import classText from './css/classText.module.css'
export interface TextProps extends PropsWithChildren {
  size?: string; // Добавьте свойство size
  mode?: number; // Добавьте свойство color
  // Можно добавить другие свойства по мере необходимости
}
const Text: React.FC<TextProps> = ({ children, mode }) => {
  const prop = {
    color:mode==1?"p116":""
  }
  return (
    <section className={classText.section}>
      <p className={classText[prop.color]}>{children}</p>
    </section>
  );
};
export default Text;
