import React, { createContext, useState } from "react";

export type GameContextProps = {
    count : number;
    setCount: React.Dispatch<React.SetStateAction<number>>; 
    isPlaying: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;   
  };

const GameContext = createContext<GameContextProps>(
  {} as GameContextProps
)
const GameContextProvider = ({ children }: { children: React.ReactNode; }) =>
 { 
  const [count, setCount] = useState<number>(0); 
  const [isPlaying, setPlaying] = useState<boolean>(false);

  return (
    <GameContext.Provider value = {{count, setCount, isPlaying, setPlaying}}>
      {children}
    </GameContext.Provider>
  )

};

export { GameContext, GameContextProvider };