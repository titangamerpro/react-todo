import React from 'react'
import { FaPlus } from "react-icons/fa";


const AddItem = () => {
  return (
    
    <form className="addform">
      <input type="text" autoFocus placeholder='add item' />
      <button type='submit' aria-label=''>
        <FaPlus className='faplus'/>
      </button>
    </form>
  );
}

export default AddItem