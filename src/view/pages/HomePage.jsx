import { useNavigate } from 'react-router-dom'
import Headers from '../organisms/Header'
import Footer from '../organisms/Footer'
import DashboardTemplate from '../templates/DashboardTemplate'
import { useState } from 'react'
import CustomToast from '../atoms/CustomToast'
import CustomLoader from '../atoms/CustomLoader'

const HomePage = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [openToast, setOpenToast] = useState(error ? true : false)
  function onNavigate(path) {
    navigate(path)
  }
  isLoading && <CustomLoader />
  return (
    <>
      <Headers onNavigate={onNavigate} setError={setError} setIsLoading={setIsLoading} />
      <DashboardTemplate />
      <Footer />
      <CustomToast
        open={openToast}
        onClose={() => setOpenToast(false) && setError('')}
        message={error}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      />
    </>
  )
}

export default HomePage
