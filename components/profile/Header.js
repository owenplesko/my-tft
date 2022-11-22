import React from 'react'
import styles from '../../styles/profile/Header.module.css'
import RankCard from './RankCard'
import SummonerIcon from './SummonerIcon'

const ProfileHeader = ({name, profileIconId, summonerLevel, rankedData}) => {
  return (
    <div className={styles.header}>
      <div>
        <label className={styles.name}>{name}</label>
        <SummonerIcon className={styles.summonericon} profileIconId={profileIconId} summonerLevel={summonerLevel} />
      </div>
      <RankCard queueName={"Ranked TFT"} league={rankedData.rankedTft} />
      <RankCard queueName={"Ranked TFT"} league={rankedData.rankedTft} />
      <RankCard queueName={"Ranked TFT"} league={rankedData.rankedTft} />
    </div>
  )
}

export default ProfileHeader