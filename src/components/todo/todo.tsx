import React from 'react';
import "../todo/todo.css"
import Header from '../Header/header';

import Main from '../main/main';


function Todo() {
  return (
    <div className="Todo">
      <Header />
      <Main/>
    </div>
  );
}
export default Todo;
