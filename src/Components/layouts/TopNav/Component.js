import React from 'react'
import T from 'prop-types'
import { Link } from 'react-router-dom'

import ApikoLogo from 'Components/layouts/ApikoLogo'
import LinkButton from 'Components/layouts/Buttons/LinkButton'

import './TopNav.scss'

const TopNav = ({ user, logoutHandler }) => (
  <nav className="navigation">
    <Link to="/">
      <ApikoLogo height={50} long />
    </Link>
    <ul className="navigation-list">
      {user && (<li className="username"><span>Hello, {user}</span></li>)}
      <li className="navigation-item">
        <LinkButton to="/chat">Chat</LinkButton>
      </li>
      <li>
        {user
          ? <a className="logout-button" href="" onClick={() => logoutHandler()}>LogOut</a>
          : <LinkButton to="signin">SignIn</LinkButton>
        }
      </li>
    </ul>
  </nav>
)

TopNav.propTypes = {
  user: T.string,
  logoutHandler: T.func
}


export default TopNav
