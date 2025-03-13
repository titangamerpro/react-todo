import React, { useState } from 'react'
import Items from './Items'


const List = ({lists}) => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList'))|| [])

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked}:item)
    setItems(listItems)
    localStorage.setItem('todoList', JSON.stringify(listItems))
  }
  console.log();

  const handlDelet = id => {
    const itemss = items.filter(item => item.id !== id)
    setItems(itemss)
  }

  return (
    <>
      <Items lists={items} handleCheck={handleCheck} handlDelet={handlDelet} /> 

    </>
  )
}

export default List