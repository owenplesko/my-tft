import {AiOutlineSearch} from 'react-icons/ai'
import RegionSelector from './RegionSelector'
import {useState} from 'react'

const SummonerSearch = ({searchSummoner}) => {
  const [region, setRegion] = useState(process.env.regions[0])
  const [summoner, setSummoner] = useState('')

  const onSearch = (e) => {
    e.preventDefault()
    if(!summoner)
      return
    
    searchSummoner(region, summoner)
  }

return (
  <form className='flex items-center w-[550px] bg-dark2 text-light1 rounded-sm'
        onSubmit={onSearch}>
    <RegionSelector selected={region} setSelected={setRegion}/>
    <input
      type='text' 
      className='flex-grow bg-transparent placeholder:text-dark3'
      value={summoner}
      placeholder='Summoner Name...'
      onChange={(e) => setSummoner(e.target.value)}
    />
    <button className='p-2 hover:text-darkAccent3'>
      <AiOutlineSearch size={20}/>
    </button>
	</form>
  )
}

export default SummonerSearch