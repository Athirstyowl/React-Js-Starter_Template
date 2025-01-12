import { signOut } from 'supertokens-auth-react/recipe/emailpassword'

export default async function signOutClicked() {
  return await signOut()
}
