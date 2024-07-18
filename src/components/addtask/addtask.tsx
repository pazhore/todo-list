import React from 'react';
import "../addtask/addtask.css";
import { useState } from "react";


import { IoAdd } from "react-icons/io5";
import "../addtask/addtask.css"




function Addtask() {
//       const [text, setText] = useState({
//     taskname:"",
//     Date:"",
//     priority:"",
//     discription:""

//   });
//   const [task, setTASK] = useState({
//     taskname:"",
//     Date:"",
//     priority:"",
//     discription:""

//   });
//   const HandleInputChange=(event)=>{
//     setText(event.target.value);


//   }
  

    return (
        <div className='addtask '>
            <div className='sub '>
                <div className="heading">
                    <a>Add New Task</a>
                    <a>GO Back</a>
                </div>
                <div className="form">
                    <p >Title</p>
                    <input className='task' type="text"  />
                    <p >Date</p>
                    <input className="date" type="date" />
                    <p>Priority</p>
                    <div className='checkbox'>
                        <div>
                            <label >Extreme</label>
                            <input type="checkbox" />
                        </div>
                        <div>
                        <label >Moderate</label>
                        <input type="checkbox" />
                        </div>
                        <div>
                        <label >Low</label>
                        <input type="checkbox" />

                        </div>

                      
                        
                    </div>

                    <p >Task Discription</p>
                    <input className='taskdiscription' type="text" />
                </div>
                <button>DONE</button></div>


        </div>

    );
}

export default Addtask;
