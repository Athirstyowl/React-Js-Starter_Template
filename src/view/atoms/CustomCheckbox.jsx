import { Checkbox as MUICheckbox } from '@mui/material'

const CustomCheckbox = ({ checked, onChange, label }) => {
  return <MUICheckbox checked={checked} onChange={onChange} label={label} />
}

export default CustomCheckbox
