import React, { useReducer } from 'react'

function reducerFn(state, action) {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + 1,
        even: (state.count + 1) % 2 === 0 && state.count + 1 !== 0
      }
    case 'DEC':
      return {
        ...state,
        count: state.count - 1,
        even: (state.count - 1) % 2 === 0 && state.count - 1 !== 0
      }
    case 'Restart':
      return {
        ...state,
        count: 0,
        even: false
      }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 0, even: false })

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
        <span>
          {state.count} || Juftmi: {state.even ? 'Ha' : 'Yoq'}
        </span>
        <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      </div>
      <br />
      <button onClick={() => dispatch({ type: 'Restart' })}>Restart</button>
    </>
  )
}

export default App