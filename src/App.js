import './App.css'
import { useState } from 'react';

function Sqaure({value, onSquareClick}) { //child component
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue('X');
  // }


  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() { //parent component
  const[squares, setSquares] = useState(Array(9).fill(null));
  const[xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if(squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext)
    setSquares(nextSquares);
  }

  return (
    <>
      <div className='board-row'>
        <Sqaure value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Sqaure value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Sqaure value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='board-row'>
        <Sqaure value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Sqaure value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Sqaure value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='board-row'>
        <Sqaure value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Sqaure value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Sqaure value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    </>
  )
}
