import React, { FC, useContext, useState } from 'react';
import { Data } from '../main/main';
import "../todo-list/todo_list.css";
import { todoContext } from '../../context/context';
import Detail from '../detail/detail';
interface TodolistProps {
  data: Data
}
const Todolist: FC<TodolistProps> = () => {
  type Inputs = {
    taskname: string;
    date: string;
    discription: string;
    priority: string;
  };
  // const [todo,setTodo]=useState<Inputs[]>([]);
  const value = useContext(todoContext);
  return (
    <>
      <div className="todolist">
        <h1>All taskS</h1>
        <div className="list">
            <div className='divlist'>
            {
              value?.list.map((value,index)=>(  
                <li className='li'>
                   <h5>{value.taskname}</h5>
                <p>{value.discription}</p>
                <ul className='sub-list d-flex justify-content-spacearound'>
                  <li> priority: {value.priority}</li>
                  <li>created on: {value.date}</li>
                </ul></li>
             
              ))
            }
            </div>

        </div>
      </div>
    </>
  );
};
export default Todolist;

