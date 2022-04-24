import { NextComponentType } from 'next'
import React, { Component } from 'react'
import TeamProps from '../../interfaces/team'
import Team from '../team'
import styles from './Teams.module.css'

const Teams: NextComponentType = () => {
  return (
    <div className={styles.teams}>
      <table className={styles.teamsTable}>
        <thead></thead>
        <tbody id="teamsResults">
          {/* {
            props.map((value, index) => {
              return (
                <Team team={value} />
              )
            })
          } */}
        </tbody>
      </table>
    </div>
  )
}

export default Teams
