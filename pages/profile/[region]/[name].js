import Image from 'next/image'
import MatchCard from '../../../components/profile/MatchCard'
import RankCard from '../../../components/profile/RankCard'

const ProfilePage = ({name, region, summonerId, puuid, profileIconId, rankedTftData, doubleUpData, matchData}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='grid gap-4 m-4'>
        <div className='border-2 border-solid border-dark1 rounded-sm shadow-md'>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${profileIconId}.png`}
            width={128} height={128}
          />
        </div>
        <div className='flex flex-col justify-center items-start col-start-2'>
          <div className='flex items-center'>
            <span className='mr-2 pr-2 border-r border-dark1 text-2xl text-light1'>{name}</span>
            <span className='py-0.5 px-1.5 bg-dark1 rounded-sm text-light1 text-xs shadow-sm'>{process.env.regionsDisplayValues[region]}</span>
          </div>
          <button className='my-2 py-1 px-2 bg-accent3 text-dark1 rounded-sm shadow-sm hover:bg-darkAccent3'>
            Refresh
          </button>
        </div>
        <div className='border-t-2 border-dark1 col-span-2'/>
        <div className='flex flex-col gap-4'>
          <RankCard queueName='Ranked TFT' rankedData={rankedTftData}/>
          <RankCard queueName='Double Up' rankedData={doubleUpData}/>
        </div>
        <ul className='flex flex-col gap-4'>
          {matchData.map(match => <MatchCard focusPuuid={puuid} matchInfo={match.info} matchId={match.metadata.match_id}/>)}
        </ul>
      </div>
    </div>
  )
}

async function getSummonerByName(region, name) {
  const response = await fetch(`https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RIOT_KEY}`)
  const data = await response.json()
  return data
}

async function getRankedData(region, summonerId) {
  const tftResponse = await fetch(`https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_KEY}`)
  const tftData = await tftResponse.json()
  const leagueResponse = await fetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_KEY}`)
  const leagueData = await leagueResponse.json()

  let rankedTftData = {
    tier: 'UNRANKED',
    rank: null,
    leaguePoints: null
  }
  let doubleUpData = {
    tier: 'UNRANKED',
    rank: null,
    leaguePoints: null
  }
  let hyperRollData = {
    tier: 'UNRANKED',
    rank: null,
    leaguePoints: null
  }

  tftData.forEach(league => {
    if(league.queueType === 'RANKED_TFT')
      rankedTftData = {tier: league.tier, rank: league.rank, leaguePoints: league.leaguePoints}
  })
  leagueData.forEach(league => {
    if(league.queueType === 'DOUBLE_UP')
      doubleUpData = {tier: league.tier, rank: league.rank, leaguePoints: league.leaguePoints}
  })

  return {rankedTftData, doubleUpData, hyperRollData}
}

async function getMatchHistory(puuid, start, count) {
  const response = await fetch(`https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${process.env.RIOT_KEY}`)
  const data = await response.json()
  return data
}

async function getMatchData(matchId) {
  const response = await fetch(`https://americas.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${process.env.RIOT_KEY}`)
  const data = await response.json()
  return data
}

export async function getServerSideProps(context) {
  const {region, name} = context.query;

  const summoner = await getSummonerByName(region, name)
  const {rankedTftData, doubleUpData, hyperRollData} = await getRankedData(region, summoner.id)

  const matchHistory = await getMatchHistory(summoner.puuid, 0, 3)
  const matchData = await Promise.all(matchHistory.map(async (matchId) => getMatchData(matchId)))

  return {props: {
    name: summoner.name,
    region: region,
    summonerId: summoner.id,
    puuid: summoner.puuid,
    profileIconId: summoner.profileIconId,
    summonerLevel: summoner.summonerLevel,
    rankedTftData: rankedTftData,
    doubleUpData: doubleUpData,
    matchData: matchData
  }}
}

export default ProfilePage