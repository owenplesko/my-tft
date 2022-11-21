import NavBar from './NavBar'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>My TFT</title>
      </Head>
      <NavBar/>
      {children}
    </div>
  )
}

export default Layout