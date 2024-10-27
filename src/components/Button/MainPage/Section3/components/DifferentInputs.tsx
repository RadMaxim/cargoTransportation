import { memo } from "react";
import { DifInput } from "../../../../../../AllInterface/Interface";

const DifferentInputs = memo(({ pl, type, register, names }: DifInput) => (
  <div>
    <input {...register(names)} type={type} placeholder={pl} />
  </div>
));
export default DifferentInputs;
