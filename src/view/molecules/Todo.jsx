import { Box as MUIBox, ListItem, ListItemText, TextField } from '@mui/material'
import CustomCheckbox from '../atoms/CustomCheckbox'
import CustomText from '../atoms/CustomText'
import CustomButton from '../atoms/CustomButton'
import { DeleteOutline, UpdateOutlined, SaveOutlined } from '@mui/icons-material'
import { useState } from 'react'

const Todo = ({ id, text, completed, toggleTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedText, setUpdatedText] = useState(text)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    setIsEditing(false)
    updateTodo(id, updatedText, completed) // Pass the updated text to the parent for saving
  }

  return (
    <ListItem key={id} dense>
      <CustomCheckbox checked={completed} onChange={() => toggleTodo(id, !completed)} />
      <ListItemText>
        {isEditing ? (
          <TextField
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
          />
        ) : (
          <CustomText variant="body1">{text}</CustomText>
        )}
      </ListItemText>
      <MUIBox sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, ml: 2 }}>
        {isEditing ? (
          <CustomButton onClick={handleSave}>
            <SaveOutlined />
          </CustomButton>
        ) : (
          <CustomButton onClick={handleEdit}>
            <UpdateOutlined />
          </CustomButton>
        )}
        <CustomButton onClick={() => deleteTodo(id)}>
          <DeleteOutline />
        </CustomButton>
      </MUIBox>
    </ListItem>
  )
}

export default Todo
