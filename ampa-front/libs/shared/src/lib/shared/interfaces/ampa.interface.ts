import { Family, News } from "@ampa-front/shared";
import { School } from "@ampa-front/shared";

export interface Ampa {
  idAmpa: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  /*school: School;
  families: Array<Family>[];
  news: Array<News>[];*/
}
