import React, { useState } from 'react';
import './App.css';

import NewTask from './components/NewTask';
import Tasks from './components/Tasks';

function App() {
  //Test Case
  const [tasks, setTasks] = useState([
    { item: "Set Items", checked: false },
    { item: "Checkboxes", checked: true },
    { item: "Delete Items", checked: false }
  ]);


  //create
  const createTask = (newTask) => {
    // append newTask to task list
    setTasks([...tasks, newTask])
    //need to assign a default value to "checked" key upon creation. //completed in createTask function on NewTask.jsx
    console.log("New task has been added")
  }

  //Read

  //Update:  checkbox with strikethrough

  const updateTask = (idx) => {

    console.log("Updated task at index " + idx)
    const copyTasks = [...tasks];
    console.log(copyTasks[idx].checked)
    //cannot change the immutable original state, must make a copy
    // tasks[idx].checked = !tasks[idx].checked  // will not work

    //set value of .checked to the opposite when clicked
    copyTasks[idx].checked = !copyTasks[idx].checked

    setTasks(copyTasks)
  }

  // Delete:  delete by index
  const deleteTask = (idx) => {
    console.log("Deleted from app.js at index " + idx)
    // filter method to ensure only the selected item is deleted (at specified index)
    const newTasks = tasks.filter((task, i) => {
      // if specified index is not exactly equal to the index I clicked on, return true.  
      // if the index is changed to false, it will not be in the array.
      if (idx !== i) { return true } else { return false }
    })
    setTasks(newTasks);
  }



  return (
    <div className="App">
      <NewTask createTask={createTask} />
      <hr />
      {
        tasks.map((task, i, checked) => {
          return <Tasks
            key={i}
            task={task}
            idx={i}
            checked={checked}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        })
      }
      <hr />
      JSON: {JSON.stringify(tasks)}
      <hr />
      {/* Item: {tasks.item} Hello */}
      {/* < /> */}
    </div >
  );
}

export default App;


// Iterate through the existing tasks using the map method.
// Allow the user to add a new task, initially set to not completed.
// Allow the user to remove a task by clicking the delete button.
// Allow the user to toggle a task's completion property by clicking the checkbox next to it.
// Ninja Bonus: When updating the tasks' state, don't mutate the current task objects or the current task list.
// Sensei Bonus: Persist the todos list on page refreshes. Hint, consider combining the browser's localStorage with the useEffect hook.