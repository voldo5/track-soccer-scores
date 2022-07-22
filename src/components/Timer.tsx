import React, {useContext} from "react";
import useInterval from "../hooks/useInterval";
import { GameContext } from "../gameContext";

export default function Timer() {
  //const { ...props } = useContext(GameContext); 
  const { count, setCount, isPlaying } = useContext(GameContext);
  const delay = 1000;  

  useInterval(
    () => {
      //props.setCount(props.count + 1);
      setCount(count + 1);
    },
    // Delay in milliseconds or null to stop
    isPlaying ? delay : null    
  );

  return (
    <>
      <div>        
        {new Date((21 * 60 * 60 + count) * 1000).toUTCString().split(" ")[4]}
      </div>
    </>
  );
}
