import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
//import { GameContext } from "../gameContext";
import { Team } from "../interface";
import game, { GoalListener } from "../gameObserver";
import { getPlayer } from "../assets/data";
import { Goal } from "../interface";

interface GoalHistoryProps {
  teamThatScored: Team;
};

export const GoalHistory: React.FC<GoalHistoryProps> = ({ teamThatScored }) => {

  //count renders
  console.log('---------- GoalHistory ');
  const iRender = useRef<number>(0);
  useEffect(() => {
    iRender.current = iRender.current + 1;
    console.log('GoalHistory iRender =', iRender.current);
  });


  const [hostGoals, setHostGoals] = useState<Goal[]>([]);
  const [guestGoals, setGuestGoals] = useState<Goal[]>([]);

  //const { count } = useContext(GameContext);
  //console.log("GoalHistory count = ", count);

  const onGoalScored: GoalListener = (
    teamThatScored: Team,
    timeScored: string
  ) => {
    //console.log("onGoalScored count = ", count);    
    if (teamThatScored === "Home") {
      const goal: Goal = {
        team: teamThatScored,
        time: (Math.floor(Number(timeScored) / 60) + 1).toString(),

        // time: (function(cnt: number){
        //   return (Math.floor(Number(cnt) / 60) + 1).toString()
        // })(count),
        // time: (Math.floor(Number(fcount()) / 60) + 1).toString(),

        player: getPlayer(teamThatScored),
      };
      setHostGoals((hostGoals) => [...hostGoals, goal]);
    }

    if (teamThatScored === "Away") {
      const goal: Goal = {
        team: teamThatScored,
        time: (Math.floor(Number(timeScored) / 60) + 1).toString(),
        player: getPlayer(teamThatScored),
      };
      setGuestGoals((guestGoals) => [...guestGoals, goal]);
    }
  };

  useEffect(() => {
    game.attach(onGoalScored);
    return () => {
      game.detach(onGoalScored);
    };
  }, []);

  if (teamThatScored === "Home") {
    return (
      <div>
        {/* Auto-assigning unique keys thru use React.Children.toArray method */}
        {React.Children.toArray(
          hostGoals.map(({ player, time }) => (
            <div>
              {player} {time}'
              {/* {player} {time} {count}' */}
            </div>
          ))
        )}
      </div>
    );
  }
  else {
    return (
      <div>
        {React.Children.toArray(
          guestGoals.map(({ player, time }) => (
            <div>
              {player} {time}'
            </div>
          ))
        )}
      </div>
    );
  }
};
