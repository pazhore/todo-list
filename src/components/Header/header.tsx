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
                <img src="https://see.fontimg.com/api/renderfont4/8MJlz/eyJyIjoiZnMiLCJoIjo0NCwidyI6MTI1MCwiZnMiOjM1LCJmZ2MiOiIjRURFMUUxIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VE8tRE8/super-woobly.png" alt="" />

            </div>
            <div className="left">
                <div>
                    <button className='b'><Addtask /></button>
                </div>
            </div>
        </div>
    );
}

export default Header;
