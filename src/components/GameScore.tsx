import React, { useEffect, useReducer } from 'react';
import { Team } from "../interface";
import game, { GoalListener } from '../gameObserver';
import { Score } from "../interface";

export const GameScore: React.FC = () => {

    const onGoalScored = (score: Score, team: Team): Score => {
        if (team === 'Home') {
            return {
                home: score.home + 1,
                away: score.away,
            }
        }
    
        return {
            home: score.home,
            away: score.away + 1,
        }
    }
    
    const [score, dispatch] = useReducer(onGoalScored, { home: 0, away: 0, });

    useEffect(() => {
        game.attach(dispatch as GoalListener);
        return () => {
            game.detach(dispatch)
        }
    }, []);

    return (
      <> 
        <span>
          {`${score.home} - ${score.away}`}
        </span>
      </>
    );
}