import React, { useState } from 'react'

function UseState() {
    const [number, setnumber] = useState(1);
    return (
        <>
            <p>{number}</p>
            <button onClick={()=> setnumber(number+1)}>click me to inc</button>
            <button onClick={()=> number >1 ? setnumber(number-1) :setnumber(0)}>click me to inc</button>
        </>
    )
    }

export default UseState
