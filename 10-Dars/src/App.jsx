import React, { useReducer } from 'react'


// useReducer --- useState ga o'xshash, lekin stateni boshqarish uchun ko'proq mantiqni qo'llash imkonini beradi,
// 3 ta argument qabul qiladi: reducer function, boshlang'ich state va (ixtiyoriy) init function.

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
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, { count: 0, even: false })

  return (
    <div>
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
      <span>
        {state.count} || Juftmi: {state.even ? 'Ha' : 'Yoq'}
      </span>
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
    </div>
  )
}




export default App