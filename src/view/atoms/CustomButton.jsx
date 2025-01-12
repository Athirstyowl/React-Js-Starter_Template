import { Button as MUIButton } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'

const CustomButton = ({
  onClick,
  children,
  variant = 'outlined',
  color = 'primary',
  sx,
  ...props
}) => {
  const theme = useTheme()
  return (
    <MUIButton
      onClick={onClick}
      variant={variant}
      color={color}
      sx={{
        color: theme.palette.text.primary,
        ...sx
      }}
      {...props}>
      {children}
    </MUIButton>
  )
}

CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning'
  ]),
  disabled: PropTypes.bool
}

export default CustomButton
