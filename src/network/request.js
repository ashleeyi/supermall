import axios from 'axios'
//封装第三方工具
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh'
    //baseURL = 'http://106.54.54.237:8000/api/wh'
  })
  //axios的拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    //console.log(config);
    //过滤config中不符合服务器的信息
    // 发送网络请求时，添加loading图片
    //某些网络请求（比如登录token），必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err)
  })
  //相应拦截
  instance.interceptors.response.use(res => {
    //console.log("响应成功"+res);
    return res.data;
  }, err => {
    // console.log(err);
    //console.log("响应失败"+err);
    return Promise.reject(err);
  })


  return instance(config)
}

/*

request({
  url :''
}).then(res => {
  success(res)
}).catch(err => {
  failure(err)
})
 */

/**
 request({
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then( res => {
  console.log(res)
}).catch( err => {
  console.log(err)
})
 */