import React from 'react'
import styles from '../styles/ProfileHeader.module.css'

const ProfileHeader = ({name, profileIconId, tier, leaguePoints}) => {
  return (
    <div className={styles.profile}>
      <img className={styles.summonericon} src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${profileIconId}.png`}/>
      <label className={styles.name}>{name}</label>
    </div>
  )
}

export default ProfileHeader