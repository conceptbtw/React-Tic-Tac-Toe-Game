import { useState } from "react";
import useWinner from "../hooks/useWinner";
import Winner from "./Winner";
import Board from "./Board";
import Reset from "./Reset";

export default function Main() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );

  const handleClick = (i: number) => {
    if (useWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <Winner squares={squares} />
      <Board squares={squares} handleClick={handleClick} />
      <Reset onClick={handleReset} />
    </main>
  );
}
