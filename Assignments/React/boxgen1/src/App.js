import React, { useState } from 'react';
import './App.css';
import Boxes from './components/Boxes';
import New from './components/New';


function App() {

  const [boxes, setBoxes] = useState([{ color: "green", status: false }, { color: "lightblue", status: true }, { color: "red", status: false }]);

  // Pass a function to =CREATE= box into "New.jsx"
  const createBox = (newBox) => {
    setBoxes([...boxes, newBox])
    console.log("New Box has been created - from App.js")
  }
  //pass a function to =DELETE= a box by specified index. "boxes.jsx"

  const deleteBox = (deleteIdx) => {
    console.log("Box has been deleted")

    const newBoxes = boxes.filter((box, i) => {
      if (deleteIdx !== i) {
        return true
      } else return false
    })
    console.log("Delete -->", newBoxes)

    //does the actual deleting
    setBoxes(newBoxes)

  }

  //update checkboxes boolean values

  const updateBox = (idx) => {
    // console.log(idx)
    const copyBoxes = [...boxes];
    copyBoxes[idx].status = !copyBoxes[idx].status;

    //changes status of checked box
    setBoxes(copyBoxes)
  }






  return (
    <div className="App">
      <New createBox={createBox} />
      <h2>boxes</h2>
      {/* JSON: {JSON.stringify(boxes)} */}
      {/* <Boxes /> */}
      {
        boxes.map((box, i) => {
          return <Boxes key={i} box={box} idx={i} deleteBox={deleteBox} updateBox={updateBox} />
        })
      }

    </div>
  );
}

export default App;
