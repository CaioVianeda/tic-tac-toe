import style from './style.module.css'

const Game = () => {
  return (
    <div className={style["game-container"]}>
      <h1 className={style["game-title"]}>Tic-Tac-Toe</h1>
      <div className={style["board"]}>
        <div className={style["row"]}>
          <div className={style["cell"]}>X</div>
          <div className={style["cell"]}>O</div>
          <div className={style["cell"]}></div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]}></div>
          <div className={style["cell"]}></div>
          <div className={style["cell"]}></div>
        </div>
        <div className={style["row"]}>
          <div className={style["cell"]}></div>
          <div className={style["cell"]}></div>
          <div className={style["cell"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Game;
