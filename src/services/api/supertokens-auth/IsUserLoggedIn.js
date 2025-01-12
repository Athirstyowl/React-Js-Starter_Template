import Session from 'supertokens-auth-react/recipe/session'

export default async function IsUserLoggedIn() {
  return await Session.doesSessionExist()
}
