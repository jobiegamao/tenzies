import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid'

function App() {

  const [numsForDice, setNumsForDice ] = React.useState(generateDiceArray())
  const [isGameFinish, setIsGameFinish] = React.useState(false)

  //useEffect to follow numsForDice array change // listener for array
  // if it is all the same number, isGameFinish === true

  React.useEffect(() => {
    // array.every(returns boolean) to check all array and returns boolean

    //1st check if every die isSaved
      //check every single die isSaved if true, if one is false, returns false
    //if isAllSaved, get first value and check if values in array is the same
    const isAllSaved = numsForDice.every( thisDie => (thisDie.isSaved) ) 
    if(isAllSaved){
      const checkArray = numsForDice.every((thisDie) => thisDie.number === numsForDice[0].number)
      if(checkArray) {
          setIsGameFinish(true)
          console.log("Tenzies!")
        }
    }

  }, [numsForDice]) //follows numsForDice

  const dieElements = numsForDice.map( num =>( 
     <Die 
        number={num.number} 
        isSaved={num.isSaved}
        key = {num.id}
        id = {num.id}
        saveTheDie = {saveTheDie}
     />
  ))

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
