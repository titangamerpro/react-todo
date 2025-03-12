import React from "react";

const Items = ({ lists, handleCheck }) => {
  // console.log(lists);
  return (
    <ul className="lists">
      {lists.map((list) => (
        <li className="item" key={list.id} onClick={()=> handleCheck(list.id)}> 
        <input type="checkbox" checked={list.checked} />
        <label className="tittle" htmlFor="">{list.body}</label>
        </li>
      ))}
    </ul>
  );
};

export default Items;
