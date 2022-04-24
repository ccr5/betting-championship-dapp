import { NextComponentType } from 'next'
import React, { Component } from 'react'

const Teams: NextComponentType = () => {
  return (
    <div className='card'>
      <div className='card-title'>
        teste
      </div>
      <div className='card-body'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Total R$</th>
            </tr>
          </thead>
          <tbody id="teamsResults">
            <tr key="">
              <td>1</td>
              <td>Matheus</td>
              <td>0</td>
            </tr>
            {/* {
          this.props.teams.map((team, key) => {
            return (
              <tr key={team.id}>
                <td>{team.id}</td>
                <td>{team.name}</td>
                <td>{team.bets}</td>
              </tr>
            )
          })
        } */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Teams
