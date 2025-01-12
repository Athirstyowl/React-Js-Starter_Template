import { CircularProgress as MUICircularProgress, Box as MUIBox } from '@mui/material'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import CustomText from './CustomText'
const CustomLoader = ({ type = 'circular', message = 'Loading', sx, ...props }) => {
  const theme = useTheme()
  return (
    <MUIBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        ...sx
      }}>
      {type === 'linear' ? <MUICircularProgress {...props} /> : <MUICircularProgress {...props} />}
      {message && (
        <CustomText variant="body2" style={{ marginTop: '16px' }}>
          {message}
        </CustomText>
      )}
    </MUIBox>
  )
}

CustomLoader.propTypes = {
  type: PropTypes.oneOf(['linear', 'circular']).isRequired,
  message: PropTypes.string
}
export default CustomLoader
