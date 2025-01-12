import * as yup from 'yup'
import GeneralForm from '../molecules/GeneralForm'
import { signUpClicked } from '../../services/api/supertokens-auth'

const SignUpForm = ({ setShowSignIn, setError, setOpenToast }) => {
  const signUpFormFields = [
    { type: 'text', name: 'name', label: 'Name', placeholder: 'Enter your name' },
    { type: 'text', name: 'email', label: 'Email', placeholder: 'Enter your email' },
    { type: 'password', name: 'password', label: 'Password', placeholder: 'Enter your password' },
    {
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Confirm your password'
    }
  ]

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required')
  })

  const handleSubmit = (values, actions) => {
    const { confirmPassword, ...rest } = values
    if (confirmPassword === rest.password) {
      signUpClicked({ data: rest, setError })
        .then((response) => {
          if (response && response.status === 200) {
            setOpenToast(true)
            setError('User registered successfully')
            setShowSignIn(true)
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
  }

  return (
    <GeneralForm
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      fields={signUpFormFields}
    />
  )
}

export default SignUpForm
