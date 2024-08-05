
import React, { useContext } from 'react';
import "./detail.css";
import { todoContext } from '../../context/context';



function Detail() {

  const value = useContext(todoContext);
  console.log(value?.todo)


  return (


      <div className="detail">
        <h1>Walk The Dog</h1>
        <p className='p-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
        <ul className='list-task'>
          <li>fffffffffff</li>
          <li>fffffffffff</li>
          <li>fffffffffff</li>
          <li>fffffffffff</li>
          <li>fffffffffff</li>
          <li>fffffffffff</li>

        </ul>
      </div>
  );
}
export default Detail;