import React from 'react'

const SearchItems = () => {
  return (
    <form className='searchForm' >
        <input 
            type="text" 
            placeholder='search item'
            role='searchbox'
        />
    </form>
  )
}

export default SearchItems