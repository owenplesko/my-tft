import Head from 'next/head'
import { useState } from 'react'
import SummonerSearch from '../components/SummonerSearch'

export default function Home() {
  const [data, setData] = useState()

  return (
    <div>
      <Head>
        <title>My TFT</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <h1 className='navbar'>
        <SummonerSearch setData={setData}/>
      </h1>
      <div className='data'>
        <pre>
          {JSON.stringify(data, 2, 4)}
        </pre>
      </div>
    </div>
  )
}
