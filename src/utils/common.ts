//写一般的公用逻辑

//获取用户信息
export const getUserInfo = () => {
  return {
    name: '张三',
    age: 18,
    weight: 140,
  };
};
//如果有外壳,使用cb，否则使用elseCb
export const exec = (cb: any, elsecb?: any) => {
  if (window.Api) {
    return cb && cb();
  } else {
    return elsecb && elsecb();
  }
};
//解析url
interface generalInfo {
  [propName: string]: any;
}
export const getUrlParam = (name: string, href?: string) => {
  let result = '';
  const url = href || window.location.href;
  let index = url.indexOf('?');
  if (index > -1) {
    let map: generalInfo = {};
    url
      .slice(index + 1)
      .split('&')
      .forEach((item) => {
        let res = item.split('=');
        if (res[0]) {
          map[res[0]] = res[1];
        }
      });
    if (name in map) {
      result = map[name];
    }
  }
  return decodeURIComponent(result);
};
//获取token信息
export const getToken = () => {
  let token = '';
  try {
    if (typeof window.Api !== 'undefined') {
      token = JSON.parse(window.Api.Cache.get('user')).loginToken;
    } else {
      token = getUrlParam('token') || window.localStorage.token;
    }
  } catch (error) {
    console.warn(error);
  }
  return token;
};
