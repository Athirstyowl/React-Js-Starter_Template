import { Divider, List, Grid as MUIGrid, Box as MUIBox } from '@mui/material'
import CustomButton from '../atoms/CustomButton'
import { useState } from 'react'
import CustomText from '../atoms/CustomText'
import CustomTextField from '../atoms/CustomTextField'
import CustomCard from '../atoms/CustomCard'
import CustomLoader from '../atoms/CustomLoader'
import Todo from '../molecules/Todo'
import { addTodo, deleteTodo, toggleTodo, updateTodo, getAllTodos } from '../../services/api'
import queryClient from '../../services/react-query/queryClient'
import { useMutation, useQuery } from '@tanstack/react-query'
import CustomToast from '../atoms/CustomToast'
const TodoList = () => {
  const {
    data: todos,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos
  })
  const [todoInput, setTodoInput] = useState('')
  const [openToast, setOpenToast] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    setError('')
    setTodoInput(event.target.value)
  }

  const TogogleTodo = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  const AddTodo = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      setTodoInput('')
      setOpenToast('Todo added successfully')
    },
    onError: () => {
      console.log('Error adding todo')
      setOpenToast('Error adding todo')
    }
  })

  const UpdateTodo = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  const DeleteTodo = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    }
  })

  if (isLoading) return <CustomLoader />
  if (isError) setError('Error fetching todos')
  return (
    <>
      <CustomCard variant="outlined" sx={{ padding: 2, margin: 5, justifyContent: 'center' }}>
        <CustomText variant="h4" align="center">
          TODO List
        </CustomText>
        <Divider />
        <CustomTextField
          label="New TODO"
          value={todoInput}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          error={error ? true : false}
        />
        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => {
            if (!todoInput) {
              setOpenToast('Please enter a todo')
              setError('Empty Todo')
              return
            }
            setError('')
            AddTodo.mutate({
              userId: 1, // bring it from supertokens
              id: todos.data.length + 1,
              title: todoInput,
              completed: false
            })
          }}>
          Add TODO
        </CustomButton>
        <List>
          {todos.data.map(({ id, title, completed }) => (
            <Todo
              key={id}
              id={id}
              text={title}
              completed={completed}
              toggleTodo={(id, completed) => TogogleTodo.mutate({ id, completed })}
              deleteTodo={(id) => DeleteTodo.mutate(id)}
              updateTodo={(id, todoInput, completed) =>
                UpdateTodo.mutate({ id, title: todoInput, completed })
              }
            />
          ))}
        </List>
      </CustomCard>
      <CustomToast
        open={openToast}
        onClose={() => setOpenToast(false)}
        message={openToast}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={error ? { color: 'red' } : { color: 'green' }}
      />
    </>
  )
}

export default TodoList
