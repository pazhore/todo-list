import React from 'react';
import Addtask from './components/addtask/addtask';
import Header from './components/Header/header';
import Todolist from './components/todo-list/todo_list';


function App() {
  return (
    <div className="App">
      <Header />
      <Todolist />
      <Addtask/>
      
     
    </div>
  );
}

export default App;
