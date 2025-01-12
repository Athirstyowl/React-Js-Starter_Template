import { createBrowserRouter } from 'react-router-dom'
import { SessionAuth } from 'supertokens-auth-react/recipe/session'
import HomePage from './view/pages/HomePage'
import AuthPage from './view/pages/AuthPage'
import NotFoundPage from './view/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/',
    element: (
      <SessionAuth>
        <HomePage />
      </SessionAuth>
    )
  },
  {
    path: '*',
    element: (
      <SessionAuth>
        <NotFoundPage />
      </SessionAuth>
    )
  }
])

export default router
