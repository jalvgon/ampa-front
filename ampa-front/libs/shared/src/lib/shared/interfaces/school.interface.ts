import { Ampa } from "./ampa.interface";
import { News } from "./news.interface";

export interface School {
  idSchool: number;
  name: string;
  description: string;
  address: string;
  //ampas: Array<Ampa>[];
}
