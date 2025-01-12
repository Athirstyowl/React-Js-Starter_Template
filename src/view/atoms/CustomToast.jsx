import { Snackbar as MUISnackbar, Box as MUIBox, useTheme } from '@mui/material'

const CustomToast = ({ open, onClose, message, anchorOrigin, sx }) => {
  const theme = useTheme()
  return (
    <MUISnackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      message={message}
      anchorOrigin={anchorOrigin}
      variant="outlined"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        ...sx
      }}
    />
  )
}

export default CustomToast
