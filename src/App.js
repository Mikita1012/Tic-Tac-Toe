import './App.css'
import { useState } from 'react';

function Sqaure({value}) { //child component
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue('X');
  // }
  return <button className='square'>{value}</button>
}

export default function Board() { //parent component
  const[squares, setSquares] = useState(Array(9).fill(null))
  return (
    <>
      <div className='board-row'>
        <Sqaure value={squares[0]} />
        <Sqaure value={squares[1]} />
        <Sqaure value={squares[2]} />
      </div>
      <div className='board-row'>
        <Sqaure value={squares[3]} />
        <Sqaure value={squares[4]} />
        <Sqaure value={squares[5]} />
      </div>
      <div className='board-row'>
        <Sqaure value={squares[6]} />
        <Sqaure value={squares[7]} />
        <Sqaure value={squares[8]} />
      </div>

    </>
  )
}
