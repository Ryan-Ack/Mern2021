import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import ShowContent from './components/ShowContent';
import ShowTabs from './components/ShowTabs';

function App() {
  const [tabs, setTabs] = useState([
    { name: "Tab 1", content: "Tab 1 Content", isClicked: false },
    { name: "Tab 2", content: "Tab 2 Content", isClicked: false },
    { name: "Tab 3", content: "Tab 3 Content", isClicked: false }
  ])

  const [index, setIndex] = useState(0)

  //have to create a new variable 
  // const copyTabs = [{ name: "Tab 1" }, { name: "Tab 2" }, { name: "Tab 3" }]

  //Change of state must be passed to/from ShowTabs

  //Change of state must be passed to ShowContent

  //setTabs = tabs


  // const [copyContents, setCopyContents] = useState([...tabs])
  const updateContent = (idx) => {
    setIndex(idx);
  }







  return (
    <div className="App">
      <Home />
      <hr />
      {/* displays first object's .name in array */}
      {/* <p>{tabs.name}</p> */}
      {/* Map all objects in tabs array */}
      {/* <p>{copyContents}</p> */}
      {
        tabs.map((tab, i) => {
          return <ShowTabs
            tab={tab}
            key={i}
            idx={i}
            updateContent={updateContent} />
        })
      }
      <hr />
      <br />
      <ShowContent tab={tabs[index]} />


      {/* JSON: {JSON.stringify(tabs.isClicked.value)} */}
      {/* <Tabs tabs={tabs} /> */}

    </div>
  );
}

export default App;

// Create a tabs component that accepts an array of varying length.
// Have the tab headers, when clicked on correctly show the appropriate content below.
// Ninja Bonus: Allow each tab to optionally have a callback which gets fired when the relevant tab header is clicked.
// Ninja Bonus: Add some CSS animations to the tab switching to smooth out the user experience.
// Sensei Bonus: Add a JavaScript animation to the tab switching action.
