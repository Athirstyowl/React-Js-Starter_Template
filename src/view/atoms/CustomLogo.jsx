import { Paper as MUIPaper } from '@mui/material'
import PropTypes from 'prop-types'
const CustomLogo = ({ image, alternate, sx, ...props }) => {
  return (
    <MUIPaper sx={{ ...sx }} {...props}>
      <img src={image} alt={alternate} style={{ width: '100%', height: '100%' }} />
    </MUIPaper>
  )
}
CustomLogo.propTypes = {
  image: PropTypes.string.isRequired,
  alternate: PropTypes.string
}
export default CustomLogo
