import { Team } from "./interface";

export type GoalListener = (teamThatScored: Team, timeScored: string) => void;

//Observer pattern
class GameSubject {
  private listeners: GoalListener[] = [];

  public attach(listener: GoalListener) {
    this.listeners.push(listener);
  }

  public detach(listenerToRemove: GoalListener) {
    this.listeners = this.listeners.filter(
      (listener) => listener !== listenerToRemove
    );
  }

  public score(team: Team, timeScored: string) {
    this.notify(team, timeScored);
  }

  private notify(team: Team, timeScored: string) {
    this.listeners.forEach((listener) => listener(team, timeScored));
  }
}

const gameSubject = new GameSubject();

export default gameSubject;
