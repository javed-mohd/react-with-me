import React, { UseReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state+1;
    }
    
    return state;
}

const UseReducerr = () => {

    const initiaData = 10;

    const [state, dispatch] =  UseReducer (reducer, initiaData);

  return (
    <>
    <h1>{state}</h1>
    <button onClick={() => dispatch ({type: "INCR"}) }>Click me</button>
    </>
  )
};

export default UseReducerr
