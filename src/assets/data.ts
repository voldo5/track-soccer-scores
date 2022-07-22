import { Player, Team } from "../interface";

export const hostTeamName = "Barselona";
export const guestTeamName = "Chelsea";

export const hostTeam: Player[] = [
  { num: "5", name: "Sergi Busquets" },
  { num: "14", name: "Nicolas Gonzalez" },
  { num: "9", name: "Memphis Depay" },
  { num: "10", name: "Anssumane Fati" },
  { num: "17", name: "Luuk de Jong" },
  { num: "19", name: "Sergio Aguero" },
  { num: "16", name: "Pedri" },
];

export const guestTeam: Player[] = [
  { num: "3", name: "Marcos Alonso" },
  { num: "4", name: "Andreas Christensen" },
  { num: "6", name: "Thiago Silva" },
  { num: "7", name: "NGolo Kante" },
  { num: "8", name: "Mateo Kovacic" },
  { num: "10", name: "Christian Pulisic" },
];

export const getPlayer= (team: Team): string  => {
   const player = team === "Home" ? hostTeam[Math.floor(Math.random() * hostTeam.length)]
   : guestTeam[Math.floor(Math.random() * guestTeam.length)];
  return `${player.num} ${player.name}`;
}
