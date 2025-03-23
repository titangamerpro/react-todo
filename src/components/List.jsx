import React, { useEffect, useState } from 'react'
import Items from './Items'
import SearchItems from './SearchItems'
import AddItem from './AddItem'



const List = () => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList'))|| [])
  console.log(items);

  const [newItem, setNewItem] = useState('')

  const addItem = item => {
    const id = items.length ? items[items.length -1].id+1 : 1 
    const myNewItem = {id, checked:true, body:item}
    const listItem = [...items, myNewItem]
    setItems(listItem)
 
  }

  useEffect(() => {
       localStorage.setItem('todoList', JSON.stringify(items))
  }, [items])

  

  const handleCheck = id => {
    const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked}:item)
    setItems(listItems)
  }

  const handlDelet = id => {
    const itemss = items.filter(item => item.id !== id)
    setItems(itemss)
  }

  const handlSabmit = e => {
    e.preventDefault()
    if(!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <>
      <SearchItems/>
      <AddItem handlSabmit={handlSabmit} newItem={newItem} setNewItem={setNewItem} />
      <Items items={items} handleCheck={handleCheck} handlDelet={handlDelet} /> 

    </>
  )
}

export default List