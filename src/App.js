import './App.css'
import { useState } from 'react';

function Sqaure() { //child component
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return <button className='square' onClick={handleClick}>{value}</button>
}

export default function Board() { //parent component
  return (
    <>
      <div className='board-row'>
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className='board-row'>
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className='board-row'>
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>

    </>
  )
}
