import { NextComponentType } from 'next'
import React, { Component } from 'react'
import Team from '../team'
import styles from './Teams.module.css'

const Teams: NextComponentType = () => {
  const array = [0, 1, 2, 3]

  return (
    <div className={styles.teams}>
      <div className={styles.teamsTable}>
        {
          array.map((value) => {
            return (
              <div key={value}>
                <Team />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Teams
