//export const isFruit: boolean = (fruit: string) =>  ( return ["apple", "banana", "grape"].indexOf(fruit) !== -1 );
import { Team } from "../interface";

//type guard
export const isTeam = (team: string): team is Team => {
  return ["Home", "Away"].indexOf(team) !== -1;
};