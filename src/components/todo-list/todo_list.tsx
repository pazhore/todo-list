
import React, { FC, useContext, useState } from 'react';
import { Data } from '../main/main';
import "../todo-list/todo_list.css";
import { todoContext } from '../../context/context';
import { addTodo, getTodo } from '../../services/api.service';
import { useEffect } from 'react';
import Delete from '../delete/delete';

type Task = {
  taskname: string;
  date: string;
  discription: string; // Use 'discription'
  priority: string;
  id: string
};

interface TodolistProps {
  data: Data;
}

const Todolist: FC<TodolistProps> = () => {
  // Define the type for a single task item
  const [todo, setTodo] = useState<Task[]>([])
  const fetchTodoList = async () => {
    const result = await getTodo();
    setTodo(result)
    // console.log(result)
  }
  // Use the context
  const detaildata = useContext(todoContext);
  useEffect(() => {
    fetchTodoList()
  }, [detaildata?.list,detaildata?.list1])
 
  // Handle click event with proper typing
  function handleClick(task: Task) {
    detaildata?.setTodo(task);
  }
  return (
    <div className="todolist">
      <h1>All Tasks</h1>
      <div className="list">
        <div className='divlist'>
          {todo?.map((task: {
            [x: string]: any; taskname: any; discription: any; priority: any; date: any; id: any;
          }, index: React.Key | null | undefined) => (
            <div
              key={index}
              className='li'
              onClick={() => handleClick(task)}>
              <h5>{task.taskname}</h5>
              <p>{task.discription}</p>
              <ul className='sub-list d-flex justify-content-spacearound'>
                <li>Priority: {task.priority}</li>
                <li>Created on: {task.date}</li>
                <li><Delete id={task.id} /></li>
                
              </ul>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
export default Todolist;




