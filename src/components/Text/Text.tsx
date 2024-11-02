import React, { PropsWithChildren } from "react";
// import classText from './css/classText.module.css'

const Text: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <section>
      <p>{children}</p>
    </section>
  );
};
export default Text;
