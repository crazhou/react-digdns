import axios from 'axios'

export const REQUEST_DOMAINS = 'REQUEST_DOMAINS'
export const REVEIVE_DOMAINS = 'REVEIVE_DOMAINS'

/*
 * 发起一个请求域名列表的 Action
 */
export const requestDomains = token => ({
  type: REQUEST_DOMAINS,
  token
})

/*
 * 接收到服务器返回的数据，并结构化
 */
export const reveiveDomains = ({domains,meta}) =>({
  type:REVEIVE_DOMAINS,
  domains,
  total:meta.total
})
/*
 * 这一个异步的Action 触发函数
 */
export function fetchDomains(token) {
  return function(dispatch) {
    
    dispatch(requestDomains(token));

    return axios({
      baseURL: "https://api.digitalocean.com/v2/",
      url: "/domains",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(function(resp) {
      if (resp.status === 200 && resp.data) {
        dispatch(reveiveDomains(resp.data))
      }
    })
  }
  
}