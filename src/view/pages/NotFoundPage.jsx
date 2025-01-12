import { SentimentVeryDissatisfiedOutlined } from '@mui/icons-material'
import { Box, Container } from '@mui/material'
import React from 'react'
import CustomText from '../atoms/CustomText'
import CustomButton from '../atoms/CustomButton'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'error.main',
          color: 'white',
          borderRadius: '50%',
          width: 80,
          height: 80,
          mb: 4
        }}>
        <SentimentVeryDissatisfiedOutlined sx={{ fontSize: 40 }} />
      </Box>

      <CustomText variant="h3" gutterBottom>
        404 - Page Not Found
      </CustomText>

      <CustomText variant="body1" sx={{ mb: 4 }}>
        Sorry, the page you're looking for doesn't exist or has been moved.
      </CustomText>

      <CustomButton
        variant="contained"
        color="primary"
        onClick={() => navigate(-1)}
        sx={{
          textTransform: 'none',
          px: 4,
          py: 1.5
        }}>
        Go Back
      </CustomButton>
    </Container>
  )
}

export default NotFoundPage
