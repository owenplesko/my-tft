import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import search from '../components/Search'
import Search from '../components/Search'
import DropDown from '../components/DropDown'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My TFT</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className='main'>
        <Search/>
        <DropDown/>
      </div>
    </div>
  )
}
