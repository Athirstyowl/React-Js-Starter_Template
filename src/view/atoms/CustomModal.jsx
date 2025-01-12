import { Modal as MUIModal, Box as MUIBox, Divider } from '@mui/material'
import PropTypes from 'prop-types'
import CustomText from './CustomText'
import { useTheme } from '@emotion/react'
const CustomModal = ({ open, onClose, children, title, actions, sx, ...props }) => {
  const theme = useTheme()
  return (
    <MUIModal open={open} onClose={onClose} {...props}>
      <MUIBox
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
          width: 400,
          ...sx
        }}>
        {title && (
          <>
            <CustomText variant="h6" sx={{ mb: 2 }}>
              {title}
            </CustomText>
            <Divider sx={{ mb: 2 }} />
          </>
        )}
        {children}
        {actions && (
          <>
            <MUIBox sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
              {actions}
            </MUIBox>
          </>
        )}
      </MUIBox>
    </MUIModal>
  )
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  actions: PropTypes.node,
  sx: PropTypes.object
}

export default CustomModal
