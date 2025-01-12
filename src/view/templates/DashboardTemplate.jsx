import Dashboard from '../organisms/Dashboard'
import { Divider, Grid as MUIGrid } from '@mui/material'
import CustomText from '../atoms/CustomText'
import CustomError from '../atoms/CustomError'
import TodoList from '../organisms/TodoList'
const DashboardTemplate = () => {
  return (
    <>
      <MUIGrid container spacing={2} justifyContent="center" alignItems="center">
        <CustomError />
        <MUIGrid item xs={12}>
          <CustomText variant="h3" align="center">
            Dashboard
          </CustomText>
          <Dashboard />
        </MUIGrid>
        <Divider />
        <MUIGrid item xs={6} padding={0}>
          <TodoList />
        </MUIGrid>
      </MUIGrid>
    </>
  )
}

export default DashboardTemplate
