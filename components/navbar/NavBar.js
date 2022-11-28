import SummonerSearch from './SummonerSearch'
import {useRouter} from 'next/router'

const NavBar = () => {
    const router = useRouter()

    const searchSummoner = (region, name) => {
        router.push(`/profile/${region}/${name}`)
    }

    return (
        <h1 className='flex justify-center bg-dark1 p-2 shadow-md'>
            <SummonerSearch searchSummoner={searchSummoner}/>
        </h1>
    )
}

export default NavBar