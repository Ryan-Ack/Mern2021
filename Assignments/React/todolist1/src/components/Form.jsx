import React, { useState } from 'react';

const Form = ({ createList }) => {

    const [newTask, setNewTask] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        //creation function here
        createList(e.target.value)

        console.log("Created new Item todolist")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                JSON: {JSON.stringify(createList)} <br />
                state: {newTask} <br />
                {/* AppState: {lists} */}
                <input type="text" placeholder="Add To-Do Item" onChange={(e) => setNewTask(e.target.value)} />
                <input type="submit" />
                <input type="checkbox" />
            </form>

        </div>
    )
}



export default Form;