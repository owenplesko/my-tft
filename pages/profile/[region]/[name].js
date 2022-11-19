import {useRouter} from 'next/router'
import Profile from '../../../components/Profile'

const ProfilePage = () => {
  const router = useRouter()
  const {region, name} = router.query;

  const getSummoner = async () => {
    const response =  await fetch (`https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}?api_key=${riotKey}`)

  }

  return (
    <div>
      <Profile />
    </div>
  )
}

export default ProfilePage