import React, { useState } from 'react'
import SignInForm from '../organisms/SignInForm'
import SignUpForm from '../organisms/SignUpForm'
import CustomText from '../atoms/CustomText'
import CustomCard from '../atoms/CustomCard'
import { Box, Divider } from '@mui/material'
import CustomToast from '../atoms/CustomToast'
import { useNavigate } from 'react-router-dom'

const AuthTemplate = () => {
  const [showSignIn, setShowSignIn] = useState(true)
  const [error, setError] = useState('')
  const [openToast, setOpenToast] = useState(error ? true : false)
  const navigate = useNavigate()

  function onNavigate(path) {
    navigate(path)
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
        <CustomCard
          variant="outlined"
          sx={{
            margin: 5,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%'
          }}>
          <CustomText variant="h4" align="center">
            {showSignIn ? 'Sign In' : 'Sign Up'}
          </CustomText>
          <Divider sx={{ my: 2 }} />
          {showSignIn ? (
            <SignInForm setError={setError} setOpenToast={setOpenToast} onNavigate={onNavigate} />
          ) : (
            <SignUpForm
              setShowSignIn={setShowSignIn}
              setError={setError}
              setOpenToast={setOpenToast}
            />
          )}
          <CustomText variant={'subtitle1'} align="center">
            {showSignIn ? "Don't have an account? " : 'Already have an account? '}
            <CustomText
              variant="body2"
              onClick={() => setShowSignIn(!showSignIn)}
              sx={{ cursor: 'pointer', color: '#1976d2', textDecoration: 'underline' }}>
              {showSignIn ? 'Sign Up here' : 'Sign In here'}
            </CustomText>
          </CustomText>
        </CustomCard>
      </Box>
      <CustomToast
        open={openToast}
        onClose={() => setOpenToast(false)}
        message={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
    </>
  )
}

export default AuthTemplate
