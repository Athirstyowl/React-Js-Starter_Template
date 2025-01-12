import { createSlice } from '@reduxjs/toolkit'
import { signInAndUp } from 'supertokens-auth-react/recipe/thirdparty'

const initialState = {
  isAuthenticated: false,
  userId: null,
  userData: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      ;(state.isAuthenticated = true),
        (state.userId = action.payload.userId),
        (state.userData = action.payload.userData)
    },
    setLogout: (state) => {
      ;(state.isAuthenticated = false), (state.userId = null), (state.userData = null)
    }
  }
})

export const { setUser, setLogout } = authSlice.actions
export default authSlice.reducer

// export const loginUser = (email, password) => async (dispatch) => {
//   const result = await signInAndUp({ email, password })

//   if (result.status === 'OK') {
//     dispatch(setUser({ userData: result.user, userId: result.accessToken }))
//   }
// }
