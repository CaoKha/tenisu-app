export type Country = {
  picture: string;
  code: string;
}

export type Data = {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
  last: number[];
}

export type Player = {
  id: number;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  country: Country;
  picture: string;
  data: Data;
}

