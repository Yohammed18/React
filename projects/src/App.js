import React, { Fragment } from 'react'
import Counter from './Components/Counter/Counter';
import Todo from './Components/Todo/Todo.jsx';
function App() {
  return (
    <Fragment>
      <Counter />
      <Todo />
    </Fragment>
  );
}

export default App;
