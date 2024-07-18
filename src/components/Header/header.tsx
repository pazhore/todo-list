import React from 'react';
import "../Header/header.css";

import { IoAdd } from "react-icons/io5";




function Header() {
  
    return (
        <div className="header">
            <div className="title">

                <h1>To-Do</h1>
            </div>
            <div className="left">
                <div className="button">
                    <button>+</button>
                </div>
                <div className="date">
                    
                </div>


                
            </div>


        </div>
    );
}

export default Header;
