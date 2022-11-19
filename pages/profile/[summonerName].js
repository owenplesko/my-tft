import {useRouter} from 'next/router'
import Profile from '../../components/Profile'

const ProfilePage = () => {
  const router = useRouter()
  const summonerName = router.query.summonerName;

  return (
    <div className='profile'>
      <Profile summonerName={summonerName}/>
    </div>
  )
}

export default ProfilePage