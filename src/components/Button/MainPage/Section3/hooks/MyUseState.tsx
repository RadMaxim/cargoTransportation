import { useState } from "react";
import { Form } from "../../../../../../AllInterface/Interface";

const ChangeData = ({data, delta}:{data:"movers"|"hour",delta:number})=>{
    const [count, setCount] = useState<Form>({ movers: 0, hour: 0 });
    const { movers, hour } = count;
    if (data=="movers") {
      let d = movers + delta
      if (d> 11 || d < 0) return;
      setCount(() => ({ ...count, movers: d }));
    }
    else if (data=="hour") {
      let d  = hour + delta
      if (d > 11 || d < 0) return;
      setCount(() => ({ ...count, hour: d }));
    }
   
  }
export { ChangeData};