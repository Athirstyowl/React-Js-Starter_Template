import { Box, Container, useTheme } from '@mui/material'
import React from 'react'
import CustomText from '../atoms/CustomText'
import { Link } from 'react-router-dom'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: 'white',
        padding: '16px 0',
        mt: 'auto',
        width: '100%'
      }}>
      <Container maxWidth="lg">
        <CustomText variant="body1" align="center">
          &copy; {new Date().getFullYear()} React Template. All Rights Reserved.
        </CustomText>
        <CustomText variant="body2" align="center" sx={{ mt: 1 }}>
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </CustomText>
      </Container>
    </Box>
  )
}

export default Footer
