import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'

const CustomText = ({ children, variant, sx, ...props }) => {
  const theme = useTheme()
  return (
    <Typography variant={variant} sx={{ color: theme.palette.text.primary, ...sx }} {...props}>
      {children}
    </Typography>
  )
}

CustomText.propTypes = {
  children: PropTypes.node || PropTypes.string,
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2'
  ])
}

export default CustomText
