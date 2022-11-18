import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import DropDown from './DropDown'

const Search = () => {
  return (
    <div className='searchbar'>
        <DropDown/>
        <input type='text' className='input border' placeholder='Summoner Name...'/>
        <button className='btn border'>
            <AiOutlineSearch size={20}/>
        </button>
	  </div>
  )
}

export default Search