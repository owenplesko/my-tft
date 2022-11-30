import Image from 'next/image'

const MatchCard = ({focusPuuid, matchInfo, matchId}) => {

    const getFocusData = (focusPuuid, participants) => {
        for (const player of participants) {
            if(focusPuuid === player.puuid)
                return player
        }
    }

    const {placement, augments, units} = getFocusData(focusPuuid, matchInfo.participants)
    const gameDate = new Date(matchInfo.game_datetime)

    return (
        <li className='flex items-center p-2 bg-dark3 text-light1 shadow-md rounded-sm gap-2' key={matchId}>
            <div className='flex flex-col justify-start'>
                <span className='font-bold'>{`#${placement}`}</span>
                <span className='text-light3 text-xs'>
                    {new Date(matchInfo.game_length * 1000).toISOString().substring(14, 19)}
                    <br/>
                    {`${gameDate.getDate()}/${gameDate.getMonth()}`}
                </span>
            </div>
            <ul>
                {augments.map(augment => <li>{augment}</li>)}
            </ul>
            <ul className='flex gap-2'>
                {units.map(unit => <li>
                    <Image 
                        src={`/unitIcons/${unit.character_id.toLowerCase()}.png`}
                        width={32}
                        height={32}
                    />
                </li>)}
            </ul>
        </li>
    )
}

export default MatchCard