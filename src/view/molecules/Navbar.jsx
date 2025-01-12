import {
  Box as MUIBox,
  AppBar as MUIAppBar,
  Toolbar as MUIToolbar,
  IconButton,
  useTheme
} from '@mui/material'
import PropTypes from 'prop-types'
import CustomText from '../atoms/CustomText'
import { LogoutRounded, Menu, Nightlight, WbSunny } from '@mui/icons-material'
import CustomButton from '../atoms/CustomButton'
import { setThemeMode } from '../../redux/features/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import CustomModal from '../atoms/CustomModal'
import CustomLogo from '../atoms/CustomLogo'

const Navbar = ({
  title, //
  logo, //
  navigationLinks, //
  onNavigate,
  logoutHandler
}) => {
  const [openModal, setOpenModal] = useState(false)
  const onClickModalOpen = () => {
    setOpenModal(true)
  }
  const onClickModalClose = () => {
    setOpenModal(false)
  }

  const theme = useTheme()
  const themeMode = useSelector((state) => state.theme.themeMode)
  const dispatch = useDispatch()
  function toggleTheme() {
    dispatch(setThemeMode())
  }

  return (
    <>
      <MUIAppBar
        position="fixed"
        sx={{
          width: '100%',
          mx: 'auto',
          margin: 0,
          backgroundColor: theme.palette.background.default
        }}>
        <MUIToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            //onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <Menu />
          </IconButton>
          <CustomLogo
            image={logo}
            alternate="Logo"
            sx={{
              width: 50,
              height: 50,
              marginRight: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <CustomText variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </CustomText>
          {navigationLinks.map((link, index) => {
            return (
              <CustomText
                key={index}
                variant="subtitle1"
                onClick={() => onNavigate(link.href)}
                sx={{ cursor: 'pointer', mx: 2 }}>
                {link.label}
              </CustomText>
            )
          })}
          <IconButton color="inherit" onClick={toggleTheme}>
            {themeMode === 'dark' ? (
              <WbSunny sx={{ color: '#fff' }} />
            ) : (
              <Nightlight sx={{ color: '#000' }} />
            )}
          </IconButton>
          <CustomButton onClick={onClickModalOpen} variant="text" color="inherit">
            LogOut <LogoutRounded sx={{ marginLeft: 0.5 }} />
          </CustomButton>
        </MUIToolbar>
      </MUIAppBar>

      {openModal && (
        <CustomModal
          open={openModal}
          onClose={onClickModalClose}
          title="Logout"
          actions={
            <>
              <CustomButton onClick={logoutHandler} variant="outlined" color="error">
                Logout
              </CustomButton>
              <CustomButton onClick={onClickModalClose} variant="outlined" color="info">
                Cancel
              </CustomButton>
            </>
          }>
          <CustomText variant="h6" sx={{ mb: 3 }}>
            Are you sure you want to logout?
          </CustomText>
        </CustomModal>
      )}
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  navigationLinks: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
  logoutHandler: PropTypes.func.isRequired
}

export default Navbar
