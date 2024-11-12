import { useEffect, useState } from "react";
import style from "./style.module.css";
import { checkWinner } from "../../../utils/checkWinner";
import PentagonIcon from '@mui/icons-material/Pentagon';

const SecondaryBoard = () => {
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
      setWinner(winner);
    }
  }, [positions]);

  return (
      <div className={style["board"]}>
        {!winner ?
         <>
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
       </> :
       <div style={{fontSize: "200px"}}>{winner === "XO"  ? <PentagonIcon sx={{width: "200px", height: "200px"}}/> : winner}</div>}
      </div>

  );    
};

export default SecondaryBoard;
