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
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        setList([...list, data])
        reset();
    };
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                +
            </Button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title >ADD TASK</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <div className="row">
                                <div className=" same taskdiv col-lg-6 col-sm-12">
                                    <p className="m-0">Title</p>
                                    <input className='task' type="text" {...register("taskname", { required: true })} />
                                    {errors.taskname && <p>This field is required</p>}
                                </div>
                                <div className=" same datediv  col-lg-6 col-sm-12">
                                    <p className="m-0">Date</p>
                                    <input className="date" type="date" {...register("date", { required: true })} />
                                    {errors.date && <p>This field is required</p>}
                                </div>
                            </div>
                            <p className="m-0">Priority</p>
                            <div className=' same checkbox'>
                                <div>
                                    <input type="radio" id="low" value="low" {...register("priority")} />
                                    <label htmlFor="low">Low</label>
                                </div>
                                <div>
                                    <input type="radio" id="moderate" value="moderate" {...register("priority")} />
                                    <label htmlFor="moderate">Moderate</label>
                                </div>
                                <div>
                                    <input type="radio" id="high" value="High" {...register("priority")} />
                                    <label htmlFor="high">High</label>
                                </div>
                            </div>
                            <div className=" taskdisdiv">
                                <p className="m-0">Task Description</p>
                                <textarea className='taskdiscription' {...register("discription", { required: true })} />
                                {errors.discription && <p>This field is required</p>}
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmit(onSubmit)}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default Addtask;
