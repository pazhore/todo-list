
import React, { FC, useContext, useEffect } from 'react';
import { deleteTodoById } from '../../services/api.service';
import { todoContext } from '../../context/context';

interface ButtonProps {
  id: string;
}

const Button: FC<ButtonProps> = ({ id }) => {
  const deleteList = useContext(todoContext);
  const deleteData = async (id: string) => {
      const response = await deleteTodoById(id);
      console.log('Data deleted successfully!');
      deleteList?.setList1(response);
  };
;

  return (
    <>
      <button className='button1' onClick={() => deleteData(id)}>Delete</button>
    </>
  );
};

export default Button;
