import React from "react";
import { Game } from "./Components/Game";
import "./Components/game.css";
import {useDispatch, useSelector} from "react-redux";
import {setFirstPlayer, setGame, setSecondPlayer} from "./Redux/actions";

function App() {
 const dispatch = useDispatch();

 const playerOne = useSelector((state) => state.form.firstPlayer);
 const playerTwo = useSelector((state) => state.form.secondPlayer);
 const play = useSelector((state) => state.game.gameStarted);

  const startTheGame = () => {
    if (playerOne === "") {
      window.alert("Please, Enter player A's name")
      return
    }
    if (playerTwo === "") {
      window.alert("Please, Enter player B's name:")
      return
    }
    dispatch(setGame());
  };

  return (
    <div className="App">
      <div className="section">
        <div className="container">
          {play ? (
            <Game playerOne={playerOne} playerTwo={playerTwo} />
          ) : (
            <>
              <div className="row">
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        id="icon_prefix"
                        type="text"
                        className="validate"
                        onChange={(e) => dispatch(setFirstPlayer(e.target.value))}
                        value={playerOne}
                        autoComplete="off"
                      />
                      <label
                        className={playerOne.length ? "active" : ""}
                        htmlFor="icon_prefix"
                      >
                        Enter first player name:
                      </label>
                    </div>
                    <div className="input-field col s6">
                      <input
                        id="playerTwo"
                        type="text"
                        className="validate"
                        onChange={(e) => dispatch(setSecondPlayer(e.target.value))}
                        value={playerTwo}
                        autoComplete="off"
                      />
                      <label
                        className={playerTwo.length ? "active" : ""}
                        htmlFor="playerTwo"
                      >
                        Enter second player name:
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-wrapper">
                <button
                  className="waves-effect waves-light btn-large"
                  onClick={startTheGame}
                  color="black"
                >
                  Start The Game
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
