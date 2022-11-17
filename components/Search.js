import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='searchbar'>
        <input type='text' className='input component' placeholder='Summoner Name...'/>
        <button className='btn component'>
            <AiOutlineSearch size={25}/>
        </button>
	</div>
  )
}

export default Search