import { useContext } from "react";
import { GameContext } from "../gameContext";
import { GoalHistory } from "../components/GoalHistory";
import { GameScore } from "../components/GameScore";
import { ReactComponent as Barcelona } from "../assets/fc-barcelona.svg";
import { ReactComponent as Chelsea } from "../assets/fc-chelsea.svg";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import game from "../gameObserver";
import { hostTeamName, guestTeamName } from "../assets/data";
import Timer from "../components/Timer";

export const Scoreboard = () => {
  // access the context value
  const { count, setPlaying, isPlaying } = useContext(GameContext);

  function handleHostClick() {
    game.score("Home", count.toString());
  }

  function handleGuestClick() {
    game.score("Away", count.toString());
  }

  return (
    <div className="grid-container">
      <div className="grid-container__tournament">
        <div>Champions League</div>
      </div>

      <div className="grid-container__elapsed-time">
        <Timer />
      </div>

      <div className="grid-container__game-date">
        <div>
          {[
            new Date(Date.now()).toLocaleString("en-us", {
              weekday: "short",
            }),
          ]}
          &nbsp;
          {[new Date(Date.now()).getDate()]}/{[new Date(Date.now()).getMonth()]}
        </div>
      </div>

      <div className="grid-container__host-team">
        <div className="grid-team-container">
          <div className="grid-team-container__emblem">
            <Barcelona width="256" height="256" />
          </div>
          <div className="grid-team-container__name">
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              shape="circle"
              onClick={handleHostClick}
              size={"large"}
              style={{ marginLeft: 12 }}
              danger
            />
            <div>&nbsp;{hostTeamName}</div>
          </div>
        </div>
      </div>
      <div className="grid-container__score">
        <GameScore />
      </div>
      <div className="grid-container__guest-team">
        <div className="grid-team-container">
          <div className="grid-team-container__emblem">
            <Chelsea width="256" height="256" />
          </div>
          <div className="grid-team-container__name">
            <Button
              type="primary"
              icon={<PoweroffOutlined />}
              shape="circle"
              onClick={handleGuestClick}
              size={"large"}
              style={{ marginLeft: 12 }}
              danger
            />
            <div>&nbsp;{guestTeamName}</div>
          </div>
        </div>
      </div>
      <div className="grid-container__host-goal-list ">
        <GoalHistory teamThatScored="Home" />
      </div>
      <div className="grid-container__guest-goal-list">
        <GoalHistory teamThatScored="Away" />
      </div>
      <div className="grid-container__free">
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          shape="round"
          onClick={() => setPlaying(!isPlaying)}
          size={"large"}
          style={{
            padding: "2px 10px 2px 10px",
            backgroundColor: "#2196F3",
            color: "black",
          }}
          danger={isPlaying ? true : false}
        >
          {isPlaying ? "pause" : "play"}
        </Button>
      </div>
    </div>
  );
};
