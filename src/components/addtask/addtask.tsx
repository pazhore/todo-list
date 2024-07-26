import "../addtask/addtask.css";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import React from "react";
import { todoContext } from '../../context/context';

export type Inputs = {
    taskname: string;
    date: string;
    discription: string;
    priority: string;
};

const Addtask: React.FC = () => {
    const context = useContext(todoContext);

    if (!context) {
        throw new Error('Addtask must be used within a ContextProvider');
    }

    const { list, setList } = context;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setList([...list, data]);
       
        reset();
    };
    console.log(list)
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                +
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>ADD TASK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <p>Title</p>
                            <input className='task' type="text" {...register("taskname", { required: true })} />
                            {errors.taskname && <p>This field is required</p>}
                            
                            <p>Date</p>
                            <input className="date" type="date" {...register("date", { required: true })} />
                            {errors.date && <p>This field is required</p>}
                            
                            <p>Priority</p>
                            <div className='checkbox'>
                                <input type="radio" id="low" value="low" {...register("priority")} />
                                <label htmlFor="low">Low</label><br />
                                <input type="radio" id="moderate" value="moderate" {...register("priority")} />
                                <label htmlFor="moderate">Moderate</label><br />
                                <input type="radio" id="high" value="High" {...register("priority")} />
                                <label htmlFor="high">High</label>
                            </div>                           
                            <p>Task Description</p>
                            <textarea className='taskdiscription' {...register("discription", { required: true })} />
                            {errors.discription && <p>This field is required</p>}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Addtask;
