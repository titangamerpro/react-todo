import React from 'react'
import Items from './Items'


const List = ({lists}) => {
  // console.log(lists);
  return (
    <div>
      <Items lists={lists}/>
    </div>
  )
}

export default List