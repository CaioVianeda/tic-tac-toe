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

  const handleWinnerCell = (position: number, winner: string) => {
    const newPositions = [...positions];
    newPositions[position] = winner;
    setPositions(newPositions);
    // setTurn(turn === "X" ? "O" : "X");
  };

  useEffect(() => {
    const winner = checkWinner(positions);
    if (winner) {
      alert(`Vencedor: Jogador ${winner}`);
      setWinner(winner);
    }
    console.log(positions);
  }, [positions]);

  return (
    <div className={style["game-container"]}>
      <h1 className={style["game-title"]}>Tic-Tac-Toe 2</h1>
      <div className={style["board"]}>
        <div className={style["row"]}>
          <div className={style["cell"]}>
            <SecondaryBoard position={0} handleWinnerCell={handleWinnerCell}/>
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard position={1} handleWinnerCell={handleWinnerCell}/>
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard position={2} handleWinnerCell={handleWinnerCell} />
          </div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]}>
            <SecondaryBoard position={3} handleWinnerCell={handleWinnerCell} />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard position={4} handleWinnerCell={handleWinnerCell} />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard position={5} handleWinnerCell={handleWinnerCell} />
          </div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]}>
            <SecondaryBoard position={6} handleWinnerCell={handleWinnerCell} />
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard position={7} handleWinnerCell={handleWinnerCell}/>
          </div>
          <div className={style["cell"]}>
            <SecondaryBoard position={8} handleWinnerCell={handleWinnerCell}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
