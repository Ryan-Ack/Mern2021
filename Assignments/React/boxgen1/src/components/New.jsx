import React, { useState } from 'react'




const New = ({ createBox }) => {

    //in order to input something, it has to have it's own state variable.
    const [newColor, setNewColor] = useState("");



    // Form submission function
    const submitHandler = (e) => {
        //stops reloading
        e.preventDefault();
        // Ensure submission is happening
        // // console.log("Submitted")
        //the props passed in from app.js, and the color keyword (required for object creation from App.js), and the newColor to add to the state.
        createBox({ color: newColor })
    }


    return (
        <form onSubmit={submitHandler}>


            {/* First: console.log values to make sure state is updating */}
            {/* enter Color:<input type="text" onChange={(e) => console.log(e.target.value)} /> */}
            {/* or  check JSON */}
            JSON: {JSON.stringify(newColor)} <br />
            state: {newColor} <br />

            {/* Then change console.log to the function (setting the state) */}
            enter Color:<input type="text" onChange={(e) => setNewColor(e.target.value)} />

            <input type="submit" value="Add Color" />

        </form>

    )
}

export default New;