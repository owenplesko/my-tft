import React from 'react'
import SummonerSearch from './SummonerSearch'

const NavBar = () => {
    const apikey = 'RGAPI-3173364a-d705-4173-a216-3d73ac7ff40d'

    const searchSummoner = (region, summoner) => {
        const response = await fetch(`https://${region.value}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apikey}`)
        return await response.json()
    }

    return (
        <h1 className='navbar'>
            <SummonerSearch/>
        </h1>
    )
}

export default NavBar