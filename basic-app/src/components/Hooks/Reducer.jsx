import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap'

function Reducer() {

    const [state, dispatch] = useReducer(reducer,initialState)


  return (
    <Container>
        <h1 className='text-center'>useReducer()</h1>
        <div className="me-3 mt-3 text-center">
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
        <hr />
    </Container>
  )
}

// Initial state of the counter
const initialState = { count: 0 };

// Reducer function: defines how the state changes based on actions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

export default Reducer
