import React from 'react';
import Todolist from '../todo-list/todo_list';
import Detail from '../detail/detail';
import { useContext } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
import Delete from '../delete/delete';
export type Data = {
    task_name: string,
    task_date: number,
    task_dis: string
}
function Main() {
    const data1: Data = {
        task_name: "hhh",
        task_date: 12 / 12 / 2034,
        task_dis: "jjjjj"
    }
    return (
        <div className="container-fluid bg ">
            <div className='row '>
                <div className='col-lg-6 col-md-12 col-sm-12 mb-1 '>
                    <Todolist data={data1} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12   '>
                    <Detail />
                </div>
            </div>
        </div>
    );
}
export default Main;