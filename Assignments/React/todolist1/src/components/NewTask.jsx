import React, { useState } from 'react'



const NewTask = ({ createTask }) => {
    const [newTask, setNewTask] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted")
        createTask({ item: newTask, checked: false });
        //clears input, but holds the value.
        e.target.reset("")


        // setState("") after successful submit to clear entry.
    }

    return (
        <div>
            <h1> Task List </h1 >
            <form onSubmit={submitHandler}>
                JSON: {JSON.stringify(newTask)}
                <input type="text" placeholder="Enter new task here" onChange={(e) => setNewTask(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )

}

export default NewTask;