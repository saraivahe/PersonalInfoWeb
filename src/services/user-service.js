import { UserManager } from 'oidc-client'
import { storeUserError, storeUser } from '../redux/auth/actions'

const config = {
  authority: "https://login-dev.com",
  client_id: "personalinfoportal",
  redirect_uri: "https://personal-info-dev.com/signin",
  response_type: "id_token token",
  scope: "openid profile personalinfoapi.read",
  post_logout_redirect_uri: "https://personal-info-dev.com/signout",
};

const userManager = new UserManager(config)

export async function loadUserFromStorage(store) {
  try {
    let user = await userManager.getUser()
    if (!user) { return store.dispatch(storeUserError()) }
    store.dispatch(storeUser(user))
  } catch (e) {
    console.error(`User not found: ${e}`)
    store.dispatch(storeUserError())
  }
}

export function signinRedirect() {
  return userManager.signinRedirect()
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback()
}

export function signoutRedirect() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirect()
}

export function signoutRedirectCallback() {
  userManager.clearStaleState()
  userManager.removeUser()
  return userManager.signoutRedirectCallback()
}

export default userManager