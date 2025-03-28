import React from 'react'

const SearchItems = ({searchItem, setSearchItem}) => {
  console.log(searchItem);
  return (
    <form className='searchForm' onSubmit={e => e.preventDefault()}>
        <input 
            type="text" 
            placeholder='search item'
            role='searchbox'
            value={searchItem}
            onChange={e => setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItems