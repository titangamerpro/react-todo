import React from "react";

const Items = ({ lists }) => {
  console.log(lists);
  return (
    <>
      {lists.map((list) => (
        <li key={list.id}> 
        <input type="checkbox" checked={list.checked} />
        {list.body}</li>
      ))}
    </>
  );
};

export default Items;
