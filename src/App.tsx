import "./App.css";
import { Scoreboard } from "./components/Scoreboard";
import { GameContext, GameContextProvider } from "./gameContext";

function App() { 
  return (
    // <div className="App">      
      <GameContextProvider>
        <Scoreboard/>        
      </GameContextProvider>
    // </div>
  );
}

export default App;
