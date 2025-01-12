import React from 'react'
import Navbar from '../molecules/Navbar'
import { Box as MUIBox } from '@mui/material'
import logo from '../../assets/logo.svg'
import { IsUserLoggedIn, signOutClicked } from '../../services/api/supertokens-auth'

const Header = ({ onNavigate, setError, setIsLoading }) => {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Todo', href: '/todo' }
  ]

  const logoutHandler = () => {
    setIsLoading(true)
    signOutClicked()
      .then(() => {
        if (() => IsUserLoggedIn()) {
          onNavigate('/auth')
        } else {
          throw new Error('Network response was not ok. Unable to logout')
        }
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <MUIBox marginBottom={12}>
      <Navbar
        title="React Starter Template"
        logo={logo}
        navigationLinks={navigationLinks}
        onNavigate={onNavigate}
        logoutHandler={logoutHandler}
      />
    </MUIBox>
  )
}

export default Header
