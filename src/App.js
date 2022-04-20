import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'

function App() {

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

  //UPDATED: function for roll button
  // must set new numsForDice except dice that are saved/pressed must stay
  function rollDice(){
    setNumsForDice( prev => prev.map( thisDie => {
      return thisDie.isSaved ? thisDie : generateDie_OneObj()
    }))
  }

  function generateDiceArray(){
    const array=[]
    for(let i=0; i < 10; i++){
      array.push(generateDie_OneObj())
    }
    return array
  }
  
  function generateDie_OneObj(){
    return {
      number: Math.ceil(Math.random() * 6),
      isSaved: false,
      id: nanoid()
    }
  }
  
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
