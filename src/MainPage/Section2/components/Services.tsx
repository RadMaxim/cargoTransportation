import React from "react";
import Button from "../../../components/Button/Button";
import classServices from "./css/classServices.module.css";
import Text from "../../../components/Text/Text";
export interface Services {
  text: string;
  price: string;
}
const Services: React.FC<Services> = ({ text, price }) => {
  return (
    <section className={classServices.mainServic}>
      <div className={classServices.main_container_servic}>
        <Text>{text}</Text>
        <Text>{price}</Text>
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
    </section>
  );
};
export default Services;
