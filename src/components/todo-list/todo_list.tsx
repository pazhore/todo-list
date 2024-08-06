// import React, { FC, useContext, useState } from 'react';
// import { Data } from '../main/main';
// import "../todo-list/todo_list.css";
// import { todoContext } from '../../context/context';
// import Detail from '../detail/detail';
// import { Inputs } from '../addtask/addtask';
// interface TodolistProps {
//   data: Data
// }
// const Todolist: React.FC = () => {
//   type Inputs = {
//     taskname: string;
//     date: string;
//     discription: string;
//     priority: string;
//   };
  
 
//   const detaildata = useContext(todoContext);
  
//   function handleClick(v) {
//     detaildata?.setTodo(value)
    
    
//   }

//   return (
//     <>
//       <div className="todolist">
//         <h1>All taskS</h1>
//         <div className="list">
//             <div className='divlist'>
//             {
//               detaildata?.list.map((value,index)=>(  
//                 <div className='li' value={value} onClick:react={()=>handleClick(value)}>
//                    <h5>{value.taskname}</h5>
//                 <p>{value.discription}</p>
//                 <ul className='sub-list d-flex justify-content-spacearound'>
//                   <li> priority: {value.priority}</li>
//                   <li>created on: {value.date}</li>
//                 </ul></div>
             
//               ))
//             }
//             </div>

//         </div>
//       </div>
//     </>
//   );
// };
// export default Todolist;
import React, { FC, useContext } from 'react';
import { Data } from '../main/main';
import "../todo-list/todo_list.css";
import { todoContext } from '../../context/context';

interface TodolistProps {
  data: Data;
}

const Todolist: FC<TodolistProps> = () => {
  // Define the type for a single task item
  type Task = {
    taskname: string;
    date: string;
    discription: string; // Use 'discription'
    priority: string;
  };

  // Use the context
  const detaildata = useContext(todoContext);

  // Handle click event with proper typing
  function handleClick(task: Task) {
    detaildata?.setTodo(task);
  }
  console.log(detaildata?.todo)

  return (
    <div className="todolist">
      <h1>All Tasks</h1>
      <div className="list">
        <div className='divlist'>
          {detaildata?.list.map((task, index) => (
            <div
              key={index} 
              className='li'
              onClick={() => handleClick(task)}
            >
              <h5>{task.taskname}</h5>
              <p>{task.discription}</p> 
              <ul className='sub-list d-flex justify-content-spacearound'>
                <li>Priority: {task.priority}</li>
                <li>Created on: {task.date}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;

// import React, { FC, useContext } from 'react';
// import { Data } from '../main/main';
// import "../todo-list/todo_list.css";
// import { todoContext } from '../../context/context';

// interface TodolistProps {
//   data: Data;
// }

// const Todolist: FC<TodolistProps> = () => {
//   // Define the type for a single task item if needed
//   type Task = {
//     taskname: string;
//     date: string;
//     description: string;
//     priority: string;
//   };

//   // Use the context
//   const detaildata = useContext(todoContext);

//   // Handle click event with proper typing
//   function handleClick(task: Task) {
//     detaildata?.setTodo(task);
//   }

//   return (
//     <div className="todolist">
//       <h1>All Tasks</h1>
//       <div className="list">
//         <div className='divlist'>
//           {detaildata?.list.map((task, index) => (
//             <div
//               key={index} // Add key for list rendering
//               className='li'
//               onClick={() => handleClick(task)}
//             >
//               <h5>{task.taskname}</h5>
//               <p>{task.discription}</p>
//               <ul className='sub-list d-flex justify-content-spacearound'>
//                 <li>Priority: {task.priority}</li>
//                 <li>Created on: {task.date}</li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todolist;


