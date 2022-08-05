import request from '@/utils/request'

/**
 * 图片验证码
 * @param {string} clientToken
 * @returns promise
 */
export function imageCode(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'arraybuffer'
  })
}

/**
 * 提交登录
 * @param {Object} data
 * @returns promise
 */
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'post',
    data
  })
}
/**
 * 获取个人信息
 * @param {Object} data
 * @returns promise
 */
export function userInfo(id) {
  return request({
    url: `/user-service/user/${id}`
  })
}
