import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
  return (

    <nav className='main-nav'>
    <ul>
      <li>
        <NavLink to='/home' className='navItem' activeClassName='navItemActive'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/add' className='navItem' activeClassName='navItemActive'>
          New Question
        </NavLink>
      </li>
      <li>
        <NavLink to='/leaderboard' className='navItem' activeClassName='navItemActive'>
          Leader Board
        </NavLink>
      </li>
      <li>
        Hello, {props.userName}
      </li>
      <li>
      <NavLink to='/logout' className='pushRight' activeClassName='navItemActive'>
          Logout
      </NavLink>
      </li>
    </ul>
  </nav>



    // <nav className='nav'>
    //   <ul>
    //     <li>
    //       <NavLink to='/home' activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/add' activeClassName='active'>
    //         New Question
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/leaderboard' activeClassName='active'>
    //         Leader Board
    //       </NavLink>
    //     </li>
    //     <li>
    //       Hello, {props.userName}
    //     </li>
    //     <li>
    //     <NavLink to='/logout' activeClassName='active'>
    //         Logout
    //     </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  )
}