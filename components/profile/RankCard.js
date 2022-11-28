import Image from 'next/image'

const RankCard = ({queueName, rankedData: {tier, rank, leaguePoints}}) => {
  return (
    <div className='flex flex-col items-center bg-dark3 shadow-md rounded-sm py-2 gap-1'>
      <span className='text-light1 text-xl pb-1 border-b border-solid border-dark2'>{queueName}</span>
      <Image
        className='py-1'
        src={`/rankIcons/${tier}.png`}
        width={100}
        height={100}
      />
      <span className='text-light2 text-sm'>
        {`${tier}${tier !== 'CHALLENGER' && tier !== 'GRANDMASTER' && tier !== 'MASTER' && tier !== 'UNRANKED' ? ` ${rank}` : ''}`}
      </span>
      {tier !== 'UNRANKED' &&
        <span className='text-light3 text-xs'>{`${leaguePoints} LP`}</span>
      }
    </div>
  )
}

export default RankCard