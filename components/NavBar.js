import React from 'react'
import SummonerSearch from './SummonerSearch'
import {useRouter} from 'next/router'

const NavBar = () => {
    const router = useRouter()

    const searchSummoner = (name) => {
        router.push(`/profile/${name}`)
    }

    return (
        <h1 className='navbar'>
            <SummonerSearch search={searchSummoner}/>
        </h1>
    )
}

export default NavBar