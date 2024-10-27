import React from "react";
import classLayout from "./css/classLayout.module.css";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className={classLayout.header}>
        <section></section>
        <section></section>
        <section></section>
      </header>
      {children}
      <footer className={classLayout.footer}></footer>
    </>
  );
};
export default Layout;
