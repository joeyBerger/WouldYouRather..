import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/home' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
          Hello, {props.userName}
        </li>
        <li>
        <NavLink to='/logout' activeClassName='active'>
            Logout
        </NavLink>
        </li>
      </ul>
    </nav>
  )
}