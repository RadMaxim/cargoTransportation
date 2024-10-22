import { FormEvent } from "react";
import { UseFormRegister } from "react-hook-form";

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
  register:UseFormRegister<{
    name: string;
    phone: string;
}>,
names:"name"|"phone"
}
export interface DiffLabel {
  textLabel?: string;
  id: string;
  name: string;
}
