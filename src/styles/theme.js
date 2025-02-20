import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f5f5f5', paper: '#fff' },
    text: { primary: '#000', secondary: '#555' }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#fff', secondary: '#bbb' }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif'
  }
})
