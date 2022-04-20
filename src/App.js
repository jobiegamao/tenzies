import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'

function App() {

  function generateDiceArray(){
    //change array to obj array to include boolean and id
    const array=[]
    for(let i=0; i < 10; i++){
      array.push({
        number: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid()
      }) 
    }

    return array
  }

  const [numsForDice, setNumsForDice ] = React.useState(generateDiceArray())

  const dieElements = numsForDice.map( num =>( 
     <Die 
        number={num.number} 
        isHeld={num.isHeld}
        key = {num.id}
     />
  ))

  //function for roll button
  // must set new numsForDice

  function rollDice(){
    setNumsForDice(generateDiceArray())
  }

  return (
    <div className="App">
      <main>
          <div className='dice'>
            {dieElements}
          </div>
          <button onClick={rollDice}>Roll Dice</button>
      </main>
    </div>
  );
}

export default App;
