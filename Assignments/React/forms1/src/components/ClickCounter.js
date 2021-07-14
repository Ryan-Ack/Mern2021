import React, { useState } from 'react';

const ClickCounter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}
export default ClickCounter;