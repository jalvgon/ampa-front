import { Family } from "@ampa-front/shared";


export interface User {
  userId: number;
  login: string;
  password: string;
  attempts: number;
  mail: string;
  name: string;
  subnames: string;
  phone: string;
  disabled: boolean;
  changePass: boolean;
  antiquity: Date;
  //family: Family;
}
