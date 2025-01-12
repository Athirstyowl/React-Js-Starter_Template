import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from './styles/theme'
import router from './router'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode)
  return (
    <>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
