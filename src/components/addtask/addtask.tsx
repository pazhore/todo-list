

import "../addtask/addtask.css";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../addtask/addtask.css"
import { Button, Modal } from "react-bootstrap";



type Inputs = {
    taskname: string
    date: Date
    discription: String
    priority: string

}

function Addtask() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm<Inputs>()
    let todo:Array<Inputs> = []
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        todo.push()
        reset();


    }
    console.log(todo)
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
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form">

                            <p >Title</p>
                            <input className='task' type="text"{...register("taskname", { required: true})} />
                            <p>   {errors.taskname && <span>This field is required</span>}</p>
                            <p >Date</p>
                            <input className="date" type="date" {...register("date", { required: true })} />
                            <p>   {errors.date && <span>This field is required </span>}</p>
                            <p>Priority</p>
                            <div className='checkbox'>
                                <input type="radio" id="html" value="low"  {...register("priority")} />
                                <label >low</label><br />
                                <input type="radio" id="css" value="moderate"  {...register("priority")} />
                                <label >moderate</label><br />
                                <input type="radio" id="javascript" value="High" {...register("priority")} />
                                <label >high</label>

                            </div>





                            <p >Task Discription</p>
                            <textarea className='taskdiscription'  {...register("discription", { required: true})} />
                            <p>   {errors.discription && <span>This field is required</span>}</p>

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
}

export default Addtask;
