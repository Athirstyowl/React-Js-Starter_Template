import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  themeMode: 'light'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light'
    }
  }
})

export const { setThemeMode } = themeSlice.actions
export default themeSlice.reducer
