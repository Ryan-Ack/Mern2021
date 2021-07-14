import React, { useState } from 'react';


const Boxes = ({ box, idx, deleteBox, updateBox }) => {
    // const {box,idx}=props;       // other destructure methods

    console.log(box)
    console.log(idx)







    return (
        // using .color
        <div style={{ 'backgroundColor': box.color, height: "100px", width: "100px", display: "inline-block", verticalAlign: "top", textDecoration: box.status ? "line-through" : "" }}>

            {/* Boxes from boxes.jsx */}
            {box.color}
            <br />
            <button onClick={(e) => (deleteBox(idx))}>Delete</button>


            {/* checkbox demonstration .... onChange={(e) => console.log(e.target.checked)}  ----- Boolean true/false */}
            <input type="checkbox" checked={box.status} onChange={(e) => updateBox(idx)} />
        </div>
    )

}
export default Boxes;