import React, { useState } from 'react';
import "../Header/header.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { IoAdd } from "react-icons/io5";
import Addtask from '../addtask/addtask';




function Header() {
  

    return (
        <div className="header">
            <div className="title">

                <h1>To-Do</h1>
            </div>
            <div className="left">
                <div className="Button">
                    <button className='b'><Addtask/></button>
        

                </div>

                {/*  */}
              




            </div>


        </div>
    );
}

export default Header;
