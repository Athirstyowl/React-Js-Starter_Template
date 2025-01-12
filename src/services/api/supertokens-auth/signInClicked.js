import { signIn } from 'supertokens-auth-react/recipe/emailpassword'

export default async function signInClicked({ data, setError }) {
  try {
    const response = await signIn({
      formFields: [
        { id: 'email', value: data.email },
        { id: 'password', value: data.password }
      ]
    })

    if (response.status === 'FIELD_ERROR') {
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          setError(formField.error)
        }
      })
    } else if (response.status === 'WRONG_CREDENTIALS_ERROR') {
      setError('Email password combination is incorrect.')
    } else if (response.status === 'SIGN_IN_NOT_ALLOWED') {
      setError(response.reason)
    } else {
      setError('')
      return response
    }
    return
  } catch (err) {
    if (err.isSuperTokensGeneralError === true) {
    } else {
      setError('Oops! Something went wrong.')
    }
  }
}
