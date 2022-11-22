import React from 'react'
import styles from '../../styles/profile/RankCard.module.css'
import Image from 'next/image'

const RankCard = ({className, queueName, league}) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
        <label>{queueName}</label>
        <div className={styles.imgwrapper}>
            <Image 
                src={`/rankIcons/${league.tier}.png`}
                layout='fill'
                objectFit='contain'
            />
        </div>
        <label>{`${league.tier} ${league.rank}` }</label>
        <label>{`${league.leaguePoints} LP`}</label>
    </div>
  )
}

export default RankCard