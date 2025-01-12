import { signUp } from 'supertokens-auth-react/recipe/emailpassword'

export default async function signUpClicked({ data, setError }) {
  try {
    const response = await signUp({
      formFields: [
        { id: 'name', value: data.name },
        { id: 'email', value: data.email },
        { id: 'password', value: data.password }
      ]
    })
    if (response.status === 'FIELD_ERROR') {
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          setError(formField.error)
        } else if (formField.id === 'password') {
          setError(formField.error)
        }
      })
    } else if (response.status === 'SIGN_UP_NOT_ALLOWED') {
      setError(response.reason)
    } else {
      setError('')
      return response
    }
    return
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
      setError(err.message)
    } else {
      setError('Oops! Something went wrong.')
    }
  }
}
