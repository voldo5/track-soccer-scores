export type Team = "Home" | "Away";

export interface Player {
  num: string;
  name: string;
}

export interface Goal {
  team: Team;
  time: string;
  player: string;
}

export interface Score {
  home: number;
  away: number;
}
