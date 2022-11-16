import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import search from '../components/Search'
import Search from '../components/Search'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My TFT</title>
      </Head>
      <Search/>
    </div>
  )
}
