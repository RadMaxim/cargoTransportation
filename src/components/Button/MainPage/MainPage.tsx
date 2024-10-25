import { Provider } from "react-redux";
import classMainPage from "./css/classMainPage.module.css";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Section4 from "./Section4/Section4";
import Section5 from "./Section5/Section5";
import Section6 from "./Section6/Section6";
import store from "../../../store/store";
import Layout from "../../../Layouts/Layout";

const MainPage = () => {
  return (
    <Provider store={store}>
      <Layout>
    <main className={classMainPage.main}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
      <section className={classMainPage.section}></section>
    </main>
    </Layout>
    </Provider>
  );
};
export default MainPage;
