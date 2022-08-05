import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 存token时间戳
export function setTokentime() {
  Cookies.set('Tokentime', Date.now())
}
// 拿存token时间戳
export function getTokentime() {
  return Cookies.get('Tokentime')
}
