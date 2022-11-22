import React from 'react'
import styles from '../../styles/profile/SummonerIcon.module.css'
import Image from 'next/image'

const SummonerIcon = ({profileIconId, summonerLevel}) => {
  return (
    <div className={styles.wrapper}>
      <Image 
        className={styles.image}
        src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${profileIconId}.png`}
        layout='fill'
        objectFit='contain'
      />
      <label className={styles.level} >{summonerLevel}</label>
    </div>
  )
}

export default SummonerIcon