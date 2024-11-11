import { useState } from "react";
import style from "./style.module.css";

const Game = () => {
  const [positions, setPositions] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [turn, setTurn] = useState("X");

  const handleMove = (position: number) => {
    if (positions[position] !== "") return;
    const newPositions = [...positions];
    newPositions[position] = turn;
    setPositions(newPositions);
    setTurn(turn === "X" ? "O" : "X");
  };

  return (
    <div className={style["game-container"]}>
      <h1 className={style["game-title"]}>Tic-Tac-Toe</h1>
      <div className={style["board"]}>
        <div className={style["row"]}>
          <div className={style["cell"]} onClick={() => handleMove(0)}>
            {positions[0]}
          </div>
          <div className={style["cell"]} onClick={() => handleMove(1)}>
            {positions[1]}
          </div>
          <div className={style["cell"]} onClick={() => handleMove(2)}>
            {positions[2]}
          </div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]} onClick={() => handleMove(3)}>
            {positions[3]}
          </div>
          <div className={style["cell"]} onClick={() => handleMove(4)}>
            {positions[4]}
          </div>
          <div className={style["cell"]} onClick={() => handleMove(5)}>
            {positions[5]}
          </div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]} onClick={() => handleMove(6)}>
            {positions[6]}
          </div>
          <div className={style["cell"]} onClick={() => handleMove(7)}>
            {positions[7]}
          </div>
          <div className={style["cell"]} onClick={() => handleMove(8)}>
            {positions[8]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
