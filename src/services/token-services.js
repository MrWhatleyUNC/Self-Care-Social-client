import config from '../config'
 
const TokenServices = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenServices.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
  saveUserId(userId){
    window.localStorage.setItem(config.UserId, userId)
  },
  getUserId(){
    return window.localStorage.getItem(config.UserId)
  },
  clearUserId(){
    window.localStorage.removeItem(config.UserId)
  }
}

export default TokenServices
