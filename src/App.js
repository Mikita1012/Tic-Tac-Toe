import './App.css'

function Sqaure({value}) { //child component
  return <button className='square'>{value}</button>
}

export default function Board() { //parent component
  return ( 
    <>
      <div className='board-row'>
        <Sqaure value="1"/>
        <Sqaure value="2"/>
        <Sqaure value="3"/>
      </div>
      <div className='board-row'>
        <Sqaure value="4"/>
        <Sqaure value="5"/>
        <Sqaure value="6"/>
      </div>
      <div className='board-row'>
        <Sqaure value="7"/>
        <Sqaure value="8"/>
        <Sqaure value="9"/>
      </div>

    </>
  )
}
