import axios from "axios";

export const REQUEST_DOMAINS = "REQUEST_DOMAINS";
export const REVEIVE_DOMAINS = "REVEIVE_DOMAINS";
export const SHOW_ZONEFILE = "SHOW_ZONEFILE";
export const CLOSE_ZONEFILE = "CLOSE_ZONEFILE";

export const SET_TOKEN = "SET_TOKEN";

export const setToken = token => ({
  type: SET_TOKEN,
  token
});

/*
 * 请求删除域名
 * 删除成功回调
 */
export const REQUEST_DEL_DOMAIN = "REQUEST_DEL_DOMAIN";
export const DELETE_DOMAIN_DONE = "DELETE_DOMAIN_DONE";
export const DELETE_DOMAIN_FAIL = "DELETE_DOMAIN_FAIL";

export const requestDelDomain = domain => ({
  type: REQUEST_DEL_DOMAIN,
  domain
});

/*
 * 显示删除二次确认
 */
export const SHOW_DELETE_DOMAIN = "SHOW_DELETE_DOMAIN";
export const CANCEL_DELETE_DOMAIN = "CANCEL_DELETE_DOMAIN";

export const showDeleteDomain = domain => ({
  type: SHOW_DELETE_DOMAIN,
  domain
});

export const showZonefile = text => ({
  type: SHOW_ZONEFILE,
  text
});

/*
 * 接收到服务器返回的数据，并结构化
 */
export const reveiveDomains = ({ domains, meta }) => ({
  type: REVEIVE_DOMAINS,
  domains,
  total: meta.total
});

/*
 * 这一个异步的Action 触发函数
 */
export function fetchDomains(token) {
  return function(dispatch) {
    dispatch({
      type: REQUEST_DOMAINS
    });
    dispatch(setToken(token));

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
        dispatch(reveiveDomains(resp.data));
      }
    });
  };
}
/*
 * 删除一个域名的过程 
 */
export function deleteDomain(domain) {
  return function(dispatch, getState) {
    // 发送开始删除的信号
    dispatch(requestDelDomain(domain));
    const token = getState().token;
    // 开始请求
    return axios({
      baseURL: "https://api.digitalocean.com/v2/",
      url: "/domains/" + domain,
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    }).then(function(resp) {
      if (resp.status === 204) {
        // 204 表示删除 成功
        dispatch({
          type: DELETE_DOMAIN_DONE,
          domain
        });
        dispatch(fetchDomains(token));
      } else {
        // 其它响应表示出错了
        dispatch({
          type: DELETE_DOMAIN_FAIL,
          domain
        });
      }
    });
  };
}
