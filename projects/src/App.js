import React, { Fragment } from 'react'
import Counter from './Components/Counter/Counter';
import Todo from './Components/Todo/Todo.jsx';
import Meal from './Components/Meal/Meal.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Calculator from './Components/Calculator/Calculator.jsx';




function App() {
  return (
    <Fragment>
      <Counter />
      <Todo />
      <Meal />
      <Calculator />
    </Fragment>
  );
}

export default App;
