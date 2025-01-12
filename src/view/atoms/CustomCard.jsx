import {
  Card as MUICard,
  CardContent as MUICardContent,
  CardMedia as MUICardMedia,
  CardActions as MUICardActions,
  useTheme
} from '@mui/material'
import CustomButton from './CustomButton'
import PropTypes from 'prop-types'

const CustomCard = ({ children, variant, media, actions, sx, ...props }) => {
  const theme = useTheme()
  return (
    <>
      <MUICard variant={variant} sx={{ backgroundColor: theme.palette.background.paper, ...sx }}>
        {media && <MUICardMedia image={media} />}
        <MUICardContent align="middle">{children}</MUICardContent>
        {actions && (
          <MUICardActions>
            <CustomButton variant={variant} {...props} />
          </MUICardActions>
        )}
      </MUICard>
    </>
  )
}

CustomCard.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['text', 'outlined', 'elevated']),
  media: PropTypes.string,
  sx: PropTypes.object
}

export default CustomCard
