import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import DropDown from './DropDown'
import styles from '../styles/SummonerSearch.module.css'

const SummonerSearch = ({search}) => {
  const regions = [
    {text: 'NA', value: 'NA1'},
    {text: 'EUW', value: 'EUW'},
    {text: 'EUNE', value: 'EUN1'},
    {text: 'KR', value: 'KR'},
    {text: 'JP', value: 'JP1'},
    {text: 'BR', value: 'BR1'},
    {text: 'LAN', value: 'LA1'},
    {text: 'LAS', value: 'LA2'},
    {text: 'OCE', value: 'OC1'},
    {text: 'RU', value: 'RU'},
    {text: 'TR', value: 'TR1'}
  ]
  const [region, setRegion] = useState(regions[0])
  const [summoner, setSummoner] = useState('')

  const onSearch = (e) => {
    e.preventDefault()
    if(!summoner)
      return
    
    search(summoner)
  }

return (
  <form className={styles.summonersearch} onSubmit={onSearch}>
    <DropDown className={styles.dropdown} selection={regions} selected={region} setSelected={setRegion}/>
    <input 
      type='text' 
      className={styles.textfield}
      placeholder='Summoner Name...'
      onChange={(e) => setSummoner(e.target.value)}
    />
    <button className={styles.btn}>
      <AiOutlineSearch size={20}/>
    </button>
	</form>
  )
}

export default SummonerSearch