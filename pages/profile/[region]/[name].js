import Profile from '../../../components/Profile'

const ProfilePage = ({name, profileIconId, summonerLevel, tier, rank, leaguePoints}) => {
  return (
    <div>
      <Profile name={name}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {region, name} = context.query;

  const res1 = await fetch(`https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${process.env.RIOT_KEY}`)
  const summoner = await res1.json()

  const res2 = await fetch(`https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${summoner.id}?api_key=${process.env.RIOT_KEY}`)
  const league = await res2.json()

  return {props: {
    name: summoner.name,
    profileIconId: summoner.profileIconId,
    summonerLevel: summoner.summonerLevel,
    tier: league.tier,
    rank: league.rank,
    leaguePoints: league.leaguePoints
  }}
}

export default ProfilePage