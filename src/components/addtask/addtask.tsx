import React from 'react';
import "../addtask/addtask.css";

import { IoAdd } from "react-icons/io5";
import "../addtask/addtask.css"




function Addtask() {
  
    return (
        <div className='addtask'>
            <div className="heading">
                <p>Add New Task</p>
                <p>GO Back</p>

            </div>
            <div className="form">
                <h3 >Title</h3><br />
                <input type="text" /><br />
                <h3 >Date</h3><br />
                <input type="date" /><br />
                <h3 >Task Discription</h3><br />
                <input type="text" /><br />
            </div>
            <button>DONE</button>

        </div>
       
    );
}

export default Addtask;
