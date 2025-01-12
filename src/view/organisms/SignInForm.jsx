import React from 'react'
import * as yup from 'yup'
import GeneralForm from '../molecules/GeneralForm'
import { getUserInfo, signInClicked } from '../../services/api/supertokens-auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/features/authSlice'

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
})

const SignInForm = ({ setError, setOpenToast, onNavigate }) => {
  const dispatch = useDispatch()

  const signInFormFields = [
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email'
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Enter your password'
    }
  ]

  const handleSubmit = (values, actions) => {
    const { email, password } = values
    signInClicked({ data: { email, password }, setError })
      .then((response) => {
        if (response && response.status === 'OK') {
          onNavigate('/')
          setOpenToast(false)
          setError('')
          const userInfo = getUserInfo().then((res) => {
            dispatch(setUser({ userData: res.accessTokenPayload, userId: res.userId }))
          })
        } else {
          setOpenToast(true)
        }
      })
      .catch((err) => {
        setOpenToast(true)
        setError(err.message)
      })
      .finally(() => {
        actions.resetForm()
        actions.setSubmitting(false)
      })
  }

  return (
    <>
      <GeneralForm
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        fields={signInFormFields}
      />
    </>
  )
}

export default SignInForm
