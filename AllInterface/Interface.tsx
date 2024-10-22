import { FormEvent } from "react";

export interface Form {
  movers: number;
  hour: number;
}

export interface DataForm {
  phoneNumber: string;
  names: string;
  dates: string;
}
export interface AllInterface {
  data: DataForm;
  event: FormEvent<HTMLFormElement>;
}
export interface DifInput {
  type?: string;
  pl?: string;
}
