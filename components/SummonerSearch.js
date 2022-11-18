import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import DropDown from './DropDown'

const SummonerSearch = () => {
  const regionArr = ['NA', 'EUW', 'KR', 'OCE']
  const [region, setRegion] = useState(regionArr[0])
  const [summoner, setSummoner] = useState('')

  const searchSummoner = (e) => {
    e.preventDefault()
    console.log('Searching for ' + summoner + ' on ' + region + ' server!')
  }

  return (
    <form className='summoner-search' onSubmit={searchSummoner}>
        <DropDown selection={regionArr} selected={region} setSelected={setRegion}/>
        <input 
          type='text' 
          className='textfield border'
          placeholder='Summoner Name...'
          onChange={(e) => setSummoner(e.target.value)}
        />
        <button className='btn border'>
            <AiOutlineSearch size={20}/>
        </button>
	  </form>
  )
}

export default SummonerSearch