import Head from 'next/head'
import Search from '../components/Search'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My TFT</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <h1 className='header'>
        <Search/>
      </h1>
    </div>
  )
}
