import React, { useState } from 'react'

const ShowContent = ({ tab, idx }) => {








    return (
        <div style={{ display: "inline-block", margin: 10, padding: 5, outline: "solid black 1px" }}>
            {/* <label onClick={(e) => (tabHandler(displayContent(e.target)))}>{tab.content}</label> */}
            <label>
                {tab.content}
            </label>
        </div>
    )
}

export default ShowContent;