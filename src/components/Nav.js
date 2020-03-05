import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
      <li>
          NAME
        </li>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/home' activeClassName='active'>
            Questions
          </NavLink>
        </li>
        <li>
          Logout
        </li>
      </ul>
    </nav>
  )
}