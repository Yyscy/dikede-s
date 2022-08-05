const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.userInfo.userName,
  image: state => state.user.userInfo.image,
  userId: state => state.user.loginInfo.userId
}
export default getters
