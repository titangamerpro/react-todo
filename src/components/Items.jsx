import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Items = ({ items,setItems, handleCheck, handlDelet }) => {
  // console.log(items);
  return (
    <>
      {items.length ? (
        <ul className="lists">
          {items.map((list) => (
            <li className="item" key={list.id}>
              <input
                type="checkbox"
                checked={list.checked}
                onChange={() => handleCheck(list.id)}
              />
              <label className={`title ${list.checked ? 'checked': ''}`} htmlFor="">
                {list.body}
              </label>
              <FaTrashAlt
                className="trash"
                onClick={() => handlDelet(list.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", fontSize: "35px", color: "red" }}>
          your list is empty
        </p>
      )}
    </>
  );
};

export default Items;
