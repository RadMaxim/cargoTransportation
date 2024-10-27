import Button from "../../../Button";
import classServices from "./css/classServices.module.css";

const Services = () => {
  return (
    <div className={classServices.mainServic}>
      <div className={classServices.main_container_servic}>
        <section></section>
        <section></section>
        <section>
          <Button
            type="button"
            text="Заказать"
            h={"50px"}
            w={"99px"}
            color={"btn2"}
          />
        </section>
      </div>
    </div>
  );
};
export default Services;
