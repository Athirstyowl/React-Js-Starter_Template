import { TextField as MUITextField, useTheme } from '@mui/material'
import PropTypes from 'prop-types'
const CustomTextField = ({
  label,
  value,
  onChange,
  error,
  helperText,
  variant = 'outlined',
  fullWidth = true,
  disabled = false,
  sx,
  ...props
}) => {
  const theme = useTheme()
  return (
    <MUITextField
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      className=""
      sx={{
        color: theme.palette.text.primary,
        ...sx
      }}
      {...props}
    />
  )
}

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.any,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool
}

export default CustomTextField
