import React from 'react';
import './App.css';
import Die from './components/Die';


function App() {

  //create 10 dice with 1-6 random number,
  //make an array for the 10 numbers
  //put it in useState Array
  //then call component thru mapping

  function generateDiceArray(){
    const array=[]
    for(let i=0; i < 10; i++){
      array.push(Math.ceil(Math.random() * 6)) // random 1-6
    }

    return array
  }

  const [numsForDice, setNumsForDice ] = React.useState(generateDiceArray())

  const dieElements = numsForDice.map( num => {
    return <Die number={num} />
  })

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
