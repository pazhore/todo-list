
import React, { useContext } from 'react';
import "./detail.css";
import { todoContext } from '../../context/context';
import Delete from '../delete/delete';



function Detail() {

  const value = useContext(todoContext);
const deleteValue=value?.todo

  

  return (


      <div className="detail">
        <h1>{value?.todo?.taskname}</h1>
        <p> {value?.todo?.discription}</p>
        <ul className='list-task'>
          <li>Created on : {value?.todo?.date}</li>
          <li>Priority : {value?.todo?.priority}</li>
          
        </ul>
      </div>
  );
}
export default Detail;