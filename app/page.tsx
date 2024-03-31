
"use client"
import Square from "@/components/square";
import clsx from "clsx";
import { useState } from "react";

export default function Home() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares: Array<number>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  let nextPlayer = xIsNext ? "X" : "O";
  if (winner) {
    status = "Winner: ";
  } else {
    status = "Next player: ";
  }
  return (
    (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 border-3">
        <p className=" text-blue-500 mb-5">
          {status} <span className={clsx({ "text-red-500": ((!xIsNext && !winner) || winner?.toString() === 'O'), "text-green-500": ((xIsNext && !winner) || winner?.toString() === 'X' )})}>{ !winner && nextPlayer} {winner}</span>
        </p>
        <main className="grid grid-rows-3 grid-cols-3">
          <Square props={{ value: squares[0], onSquareClick: () => handleClick(0) }}></Square>
          <Square props={{ value: squares[1], onSquareClick: () => handleClick(1) }}></Square>
          <Square props={{ value: squares[2], onSquareClick: () => handleClick(2) }}></Square>
          <Square props={{ value: squares[3], onSquareClick: () => handleClick(3) }}></Square>
          <Square props={{ value: squares[4], onSquareClick: () => handleClick(4) }}></Square>
          <Square props={{ value: squares[5], onSquareClick: () => handleClick(5) }}></Square>
          <Square props={{ value: squares[6], onSquareClick: () => handleClick(6) }}></Square>
          <Square props={{ value: squares[7], onSquareClick: () => handleClick(7) }}></Square>
          <Square props={{ value: squares[8], onSquareClick: () => handleClick(8) }}></Square>
        </main>

        <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white py-2 px-4 border border-blue-700 rounded" onClick={() => setSquares(Array(9).fill(null))}>Play again</button>

      </div>
    )
  );
}
