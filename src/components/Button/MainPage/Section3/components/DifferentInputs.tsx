import { memo } from "react";
import { DifInput } from "../../../../../../AllInterface/Interface";

const DifferentInputs = memo(({ pl, type }: DifInput) => (
  <div>
    <input type={type} placeholder={pl} />
  </div>
));
export default DifferentInputs;
