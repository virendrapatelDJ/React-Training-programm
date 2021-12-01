import React, { useReducer } from 'react';

// const reducerFunction = (state, action) => {
//   console.log(state, action);
//   if (action.type === 'INCREMENT') {
//     return { value: state.value + action.payload };
//   }
//   if (action.type === 'DECREMENT') {
//     const newState = { value: state.value - action.payload };
//     if(newState.value < 0){
//         return {value : 0}
//     }
//     return newState
//   }
//   if (action.type === 'RESET') {
//     return { value: 0 };
//   }
// };

const reducerFunction = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + action.payload };
    case 'DECREMENT':
      const newState = { value: state.value - action.payload };
      if (newState.value < 0) {
        return { value: 0 };
      }
      return newState;
    case 'RESET':
    default:
      return { value: 0 };
  }
};

export default function ReducerDemo() {
  const [counter, dispatch] = useReducer(reducerFunction, { value: 0 });

  return (
    <div style={{ padding: '30px' }}>
      <h1>Reducer Demo</h1>

      <h1>Counter : {counter.value}</h1>
      <hr />

      <div
        style={{
          border: '1px solid dodgerblue',
          padding: counter.value +  'px',
          borderRadius: counter.value + 'px',
        }}
      >
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}>
          Increase
        </button>
        <button
          disabled={!counter.value}
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 2 })}>
          Increment By 2
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 2 })}>
          Decrement By 2
        </button>
        <button
          disabled={!counter.value}
          onClick={() => dispatch({ type: 'SOMEACTION', payload: 2 })}
        >
          New Action
        </button>
      </div>
    </div>
  );
}
