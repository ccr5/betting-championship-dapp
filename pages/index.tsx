import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Teams from '../components/teams/teams'
import Tokens from '../components/tokens'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Betting Championship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container-fluid">
        <div className="row content">
          <div className="col-6">
            {/* <Teams /> */}
          </div>
          <div className="col-1" />
          <div className="col-5">
            <Tokens />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
