import React from 'react'
import { FaPlus } from "react-icons/fa";



const AddItem = ({handlSabmit, newItem, setNewItem}) => {
  return (
    
    <form onSubmit={handlSabmit} className="addform">
      <input type="text" autoFocus placeholder='add item' value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button type='submit' aria-label=''>
        <FaPlus className='faplus'/>
      </button>
    </form>
  );
}

export default AddItem