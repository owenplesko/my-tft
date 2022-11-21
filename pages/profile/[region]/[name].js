import { NodeNextRequest } from 'next/dist/server/base-http/node'
import ProfileHeader from '../../../components/ProfileHeader'
import styles from '../../../styles/ProfilePage.module.css'

const ProfilePage = ({name, profileIconId, summonerLevel, tier, rank, leaguePoints}) => {
  return (
    <div className={styles.profilepage}>
      <ProfileHeader name={name} profileIconId={profileIconId} tier={tier} leaguePoints={leaguePoints}/>
    </div>
  )
}

async function getSummoner(region, name) {
  const response = await fetch(`https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RIOT_KEY}`)
  const summoner = await response.json()
  return summoner
}

async function getRankedData(region, summonerId) {
  const response = await fetch(`https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${process.env.RIOT_KEY}`)
  const data = await response.json()
  const rankedData = {
    rankedTft: null,
    hyperRoll: null,
    doubleUp: null
  }
  data.forEach(league => {
    if(league.queueType === 'RANKED_TFT')
      rankedData.rankedTft = league
    else if(league.queueType === 'RANKED_TFT_TURBO')
      rankedData.hyperRoll = league
    else
      rankedData.doubleUp = league
  });
  return rankedData
}

export async function getServerSideProps(context) {
  const {region, name} = context.query;

  const summoner = await getSummoner(region, name)
  const rankedData = await getRankedData(region, summoner.id)

  return {props: {
    name: summoner.name,
    profileIconId: summoner.profileIconId,
    summonerLevel: summoner.summonerLevel,
    rankedData
  }}
}

export default ProfilePage