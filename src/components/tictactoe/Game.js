import React, { useReducer, useState } from "react";
import { caculatateWinner } from "../../helper";
import Board from "./Board";
import "./GameStyle.css";

function Game() {
  const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
  };
  const gameReducer = (state, action) => {
    // vì dưới truyền cho thằng dispatch là type
    switch (action.type) {
      case "CLICK": {
        const { board, xIsNext } = state;
        const { index, winner } = action.payload;
        // tra ve state có thằng thằng board với thằng xIsNext
        if (winner || board[index]) return state;
        // Clone ra 1 thằng state mới, không sử dụng spread vì sợ mảng dài các kiểu
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board[index] = xIsNext ? "X" : "O";
        nextState.xIsNext = !xIsNext;
        console.log(nextState);
        return nextState;
      }
      case "RESET": {
        const nextState = JSON.parse(JSON.stringify(state));
        nextState.board = Array(9).fill(null);
        nextState.xIsNext = true;
        return nextState;
      }
      default:
        break;
    }
    return state;
  };
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });
  const winner = caculatateWinner(state.board);
  const handleClick = (index) => {
    // const boardCoppy = [...state.board];
    // if (winner || boardCoppy[index]) return;
    // boardCoppy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCoppy);
    // // setXIsNext((xIsNext) => !xIsNext);
    // setState({
    //   ...state, // spread object kia ve , de tranh bi xoa may cai khac neu co nhieu
    //   board: boardCoppy,
    //   xIsNext: !state.xIsNext,
    // });
    dispatch({
      type: "CLICK",
      payload: { index, winner },
    });
  };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    // setState({
    //   ...state, // spread object kia ve , de tranh bi xoa may cai khac neu co nhieu
    //   board: Array(9).fill(null),
    //   xIsNext: true,
    // });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">{`Winner is ${winner}`}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        ResetGame
      </button>
    </div>
  );
}

export default Game;
