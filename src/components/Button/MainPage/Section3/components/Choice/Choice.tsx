import classChoice from "./css/classChoice.module.css";
import Radio from "./Radio/Radio";

const Choice = () => {
  return (
    <section className={classChoice.choice}>
      <div className={classChoice.choice_container}>
        <Radio textLabel="Грузчики" id="porter" />
        <Radio textLabel="Такелаж" id="Rigging" />
        <Radio textLabel="Переезд" id="Moving" />
        <Radio textLabel="Разнорабочие" id="Handymen" />
      </div>
    </section>
  );
};
export default Choice;
