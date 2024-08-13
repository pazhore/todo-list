import React, { useContext } from 'react';
import { deleteAllTodo, deleteTodoById } from '../../services/api.service';
import "../delete/delete.css"
import { todoContext } from '../../context/context';
export default function Delete() {

    const deleteData = async () => {
        try {
          // Replace the URL with your API endpoint and add the item ID in the path
          const response =await deleteTodoById()
          if (response.status === 200) {
            console.log('Data deleted successfully!');
            // Optionally, update your state or trigger a re-fetch of data here
          }
        } catch (error) {
          console.error('Error deleting data:', error);
        }
    }

  return (
    <>
    <button onClick={deleteData}>Delete</button>
    </>
  )
}
