import axios from "axios";
import {Message} from "element-ui";

let reqUrl = "";
if (process.env.NODE_ENV == 'development') {// 测试环境
  // reqUrl = "http://testdj.kuipercloud.com:28080"
} else if (process.env.NODE_ENV == 'production') {//生产环境
  reqUrl = "http://testdj.kuipercloud.com:28080"
}

let request = axios.create({
  baseURL: reqUrl,
  timeout: 300000,
  headers: {"X-Requested-With": "XMLHttpRequest"}
});

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.message.includes('timeout')) {   // 判断请求异常信息中是否含有超时timeout字符串
      Message.error("网络超时");
    }
    return Promise.reject(error);
  }
)
/*
*公共请求
* type-请求类型，post/get/put等
* url-请求地址
* sucBack-请求成功回调方法
* errorBack-请求失败回调方法
*/
function pubRequire(type, url, params, sucBack, errorBack) {
  //参数params中，有过大内容，需要通过post请求体传参时，params会以数组形式过来。
  let postParams = null;
  let getParams = null;
  if(type=="get"){
    getParams=params;
  }else{
    postParams=params;
  }
  //发起请求
  request({
    method: type,
    url: url,
    data: postParams,
    params: params,
  }).then(function (response) {
      if (response.data.errcode === 200) {
        if (sucBack) {
          sucBack(response.data);
        }
      } else {
        if (errorBack) {
          errorBack(response)
        } else {
          Message.error(response.data.msg);
        }
      }
    }, function (response) {
      if (errorBack) {
        errorBack(response.response)
      } else {
        Message.error(response.response.data.msg);
      }
    }
  ).catch(function (response) {

  })
}

export {pubRequire, request, reqUrl,}
