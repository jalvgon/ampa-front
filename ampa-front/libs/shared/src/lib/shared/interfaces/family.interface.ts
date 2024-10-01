import { Ampa, News, Student } from "@ampa-front/shared";

export interface Family {
  idFamily: number;
  name: string;
  description: string;
  //students: Array<Student>[];
  ampa: Ampa;
}

