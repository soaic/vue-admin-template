import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    params: data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function getAllUser(pageNum, pageSize) {
  return request({
    url: '/user/findAllUser',
    method: 'get',
    params: { pageNum: pageNum, pageSize: pageSize }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
