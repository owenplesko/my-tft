import React from 'react'
import styles from '../../styles/profile/SummonerIcon.module.css'

const SummonerIcon = ({className, profileIconId, summonerLevel}) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <img className={styles.icon} src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${profileIconId}.png`}/>
      <label className={styles.level} >{summonerLevel}</label>
    </div>
  )
}

export default SummonerIcon