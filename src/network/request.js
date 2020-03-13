import axios from 'axios'
//封装第三方工具
export function request(config){
  const instance = axios.create({
    baseURL : '',
    timeout : 5000
  })
  //axios的拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    //过滤config中不符合服务器的信息
    // 发送网络请求时，添加loading图片
    //某些网络请求（比如登录token），必须携带一些特殊的信息
  })
  //相应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    return  res.data;
  },err => {
    console.log(err);
  })


  return instance(config);
}


request({
  url :''
}).then(res => {
  success(res)
}).catch(err => {
  failure(err)
})