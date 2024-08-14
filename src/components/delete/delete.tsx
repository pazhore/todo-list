
import React, { FC, useContext, useEffect } from 'react';
import { deleteTodoById } from '../../services/api.service';
import { todoContext } from '../../context/context';

interface ButtonProps {
  id: string;
}
const Button: FC<ButtonProps> = ({ id }) => {
  const deleteData = async (id: string) => {
   console.log("id",id)
   
      const response = await deleteTodoById(id);
      console.log('Data deleted successfully!');
  };
  const detaildata = useContext(todoContext);
  useEffect(() => {
    console.log(detaildata?.list)
  
  }, [detaildata?.list])

  return (
    <>
      <button onClick={() => deleteData(id)}>Delete</button>
    </>
  );
};

export default Button;
