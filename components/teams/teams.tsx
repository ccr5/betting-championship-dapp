import { NextComponentType } from 'next'
import React, { Component } from 'react'
import Team from '../team'
import styles from './Teams.module.css'

const Teams: NextComponentType = () => {
  const array = [0, 1, 2, 3]

  return (
    <div className={styles.teams}>
      <table className={styles.teamsTable}>
        <thead></thead>
        <tbody id="teamsResults">
          {
            array.map((value) => {
              return (
                <tr key={value}>
                  <Team />
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Teams
