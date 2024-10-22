import { memo } from "react";
import { DiffLabel } from "../../../../../../AllInterface/Interface";

const DiffLabelRadio = memo(({ textLabel, id, name }: DiffLabel) => (
  <>
    <label htmlFor={id}>{textLabel}</label>
    <input type="radio" name={name} id={id} />
  </>
));
export default DiffLabelRadio;
