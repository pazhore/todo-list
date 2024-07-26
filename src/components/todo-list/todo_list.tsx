import React, { FC, useContext } from 'react';
import { Data } from '../main/main';
import "../todo-list/todo_list.css";
import { todoContext } from '../../context/context';
interface TodolistProps {
  data: Data
}
const Todolist: FC<TodolistProps> = () => {
  let value = useContext(todoContext);
const todolistmain=value?.list;
console.log(todolistmain)
  return (
    <>
      <div className="todolist">
        <h6>vital task</h6>
        <div className="list">
          <ul className='main-list '>
            <li className='li'>
              <h5>walk the dog</h5>
              <p>take the dog to park....................</p>
              <ul className='sub-list d-flex justify-content-spacearound'>
                <li> priority:</li>
                <li>status:</li>
                <li>created on:</li>
              </ul>
            </li>
            <li className='li'>
              <h5>walk the dog</h5>
              <p>take the dog to park....................</p>
              <ul className='sub-list d-flex justify-content-spacearound'>
                <li> priority:</li>
                <li>status:</li>
                <li>created on:</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      </>
    
  );
};

export default Todolist;

