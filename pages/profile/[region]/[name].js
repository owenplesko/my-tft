import { NodeNextRequest } from 'next/dist/server/base-http/node'
import ProfileHeader from '../../../components/profile/Header'
import styles from '../../../styles/profile/Main.module.css'

const ProfilePage = ({name, profileIconId, summonerLevel, rankedData}) => {
  return (
    <div className={styles.profilewrapper}>
      <ProfileHeader name={name} profileIconId={profileIconId} summonerLevel={summonerLevel} rankedData={rankedData}/>
    </div>
  )
}

async function getSummonerByName(region, name) {
  const response = await fetch(`https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RIOT_KEY}`)
  const summoner = await response.json()
  return summoner
}

async function getRankedData(region, summonerId) {
  const tftLeagueResponse = await fetch(`https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_KEY}`)
  const tftLeagueData = await tftLeagueResponse.json()
  const leagueResponse = await fetch(`https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_KEY}`)
  const leagueData = await leagueResponse.json()

  const rankedData = {
    rankedTft: null,
    hyperRoll: null,
    doubleUp: null
  }

  tftLeagueData.forEach(league => {
    if(league.queueType === 'RANKED_TFT')
      rankedData.rankedTft = league
    else if(league.queueType === 'RANKED_TFT_TURBO')
      rankedData.hyperRoll = league
  })
  leagueData.forEach(league => {
    if(league.queueType === `RANKED_TFT_DOUBLE_UP`)
      rankedData.doubleUp = league
  })

  return rankedData
}

export async function getServerSideProps(context) {
  const {region, name} = context.query;

  const summoner = await getSummonerByName(region, name)
  const rankedData = await getRankedData(region, summoner.id)

  return {props: {
    name: summoner.name,
    profileIconId: summoner.profileIconId,
    summonerLevel: summoner.summonerLevel,
    rankedData: rankedData,
  }}
}

export default ProfilePage