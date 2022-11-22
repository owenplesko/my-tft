import React from 'react'
import SummonerSearch from './SummonerSearch'
import {useRouter} from 'next/router'
import styles from '../../styles/navbar/Main.module.css'

const NavBar = () => {
    const router = useRouter()

    const searchSummoner = (region, name) => {
        router.push(`/profile/${region}/${name}`)
    }

    return (
        <h1 className={styles.navbar}>
            <SummonerSearch className={styles.summonersearch} searchSummoner={searchSummoner}/>
        </h1>
    )
}

export default NavBar