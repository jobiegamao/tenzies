import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'

function App() {

  function generateDiceArray(){
    const array=[]
    for(let i=0; i < 10; i++){
      array.push({
        number: Math.ceil(Math.random() * 6),
        isSaved: false,
        id: nanoid()
      }) 
    }

    return array
  }

  const [numsForDice, setNumsForDice ] = React.useState(generateDiceArray())

  const dieElements = numsForDice.map( num =>( 
     <Die 
        number={num.number} 
        isSaved={num.isSaved}
        key = {num.id}
        id = {num.id}
        saveTheDie = {saveTheDie}
     />
  ))

  //function for roll button
  // must set new numsForDice
  function rollDice(){
    setNumsForDice(generateDiceArray())
  }

  //save die key/id if it is pressed -> change bool isSaved = true || or the opposite
  // !!!this is how to update a state object
        // set -> map through old data
        // -> if found update else just return that element
  function saveTheDie(id){
    setNumsForDice(prev => prev.map(thisDie => {
      return (id !== thisDie.id ? 
              thisDie : {...thisDie, isSaved: !thisDie.isSaved }
             )
      }))
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
