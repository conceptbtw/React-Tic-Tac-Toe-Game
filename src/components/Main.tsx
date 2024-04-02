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
    nextSquares[i] = xIsNext ? "x" : "o";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <main className="p-4 flex flex-1 flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 text-text">
      <Winner squares={squares} />
      <Board squares={squares} handleClick={handleClick} />
      <Reset onClick={handleReset} />
    </main>
  );
}
