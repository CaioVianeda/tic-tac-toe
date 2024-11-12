import { useEffect, useState } from "react";
import style from "./style.module.css";
import { checkWinner } from "../../utils/checkWinner";
import SecondaryBoard from "./SecondaryBoard";

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
  const [winner, setWinner] = useState<string | undefined>(undefined);

  const reset = () => {
    setPositions(Array(9).fill(""));
    setWinner(undefined);
    setTurn("X");
  };

  const handleMove = (position: number) => {
    if (positions[position] !== "" || winner) return;
    const newPositions = [...positions];
    newPositions[position] = turn;
    setPositions(newPositions);
    setTurn(turn === "X" ? "O" : "X");
  };

  useEffect(() => {
    const winner = checkWinner(positions);
    if (winner) {
      alert(`Vencedor: Jogador ${winner}`);
      setWinner(winner);
    }
  }, [positions]);

  return (
    <div className={style["game-container"]}>
      <h1 className={style["game-title"]}>Tic-Tac-Toe</h1>
      <div className={style["board"]}>
        <div className={style["row"]}>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
