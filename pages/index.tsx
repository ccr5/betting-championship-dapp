import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  sendBet = (teamId) => {
    this.props.bet(teamId)
  }

  return (
    <div id="content">
      <TeamTable teams={this.props.teams} />
      <Form bet={this.sendBet} teams={this.props.teams} />
      <p className="text-center"> Your account: {this.props.account}</p>
    </div>
  )
}

export default Home
