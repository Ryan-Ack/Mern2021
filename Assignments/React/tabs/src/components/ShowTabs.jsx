import React, { useState } from 'react';


const ShowTabs = ({ tab, idx, updateContent }) => {

    // const [content, setContent] = useState("")



    return (
        <>
            {/* JSON(Tabs): {JSON.stringify(tab.content)} */}
            <div style={{ display: "inline-block", margin: 10, padding: 5, outline: "solid black 1px" }}>
                {/* onclick should send back to app.js the index */}
                <label onClick={(e) => updateContent(idx)}>{tab.name}</label>

                {/* <p>{idx}</p> */}
            </div>

        </>
    )
}

export default ShowTabs;