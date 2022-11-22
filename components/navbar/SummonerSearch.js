import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import DropDown from '../DropDown'
import styles from '../../styles/navbar/SummonerSearch.module.css'

const SummonerSearch = ({className, searchSummoner}) => {
  const regions = [
    {text: 'NA', value: 'na1'},
    {text: 'EUW', value: 'euw'},
    {text: 'EUNE', value: 'eun1'},
    {text: 'KR', value: 'kr'},
    {text: 'JP', value: 'jp'},
    {text: 'BR', value: 'br'},
    {text: 'LAN', value: 'la1'},
    {text: 'LAS', value: 'la2'},
    {text: 'OCE', value: 'oc1'},
    {text: 'RU', value: 'ru'},
    {text: 'TR', value: 'tr1'}
  ]
  const [region, setRegion] = useState(regions[0])
  const [summoner, setSummoner] = useState('')

  const onSearch = (e) => {
    e.preventDefault()
    if(!summoner)
      return
    
    searchSummoner(region.value, summoner)
  }

return (
  <form className={`${className} ${styles.summonersearch}`} onSubmit={onSearch}>
    <DropDown className={styles.dropdown} selection={regions} selected={region} setSelected={setRegion}/>
    <input 
      type='text' 
      className={styles.textfield}
      value={summoner}
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