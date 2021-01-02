import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*const Enter = () => import('@component/enter')
const login = () => import('@component/login/login') // 登录
/!* 页面一 *!/
const page1 = () => import('@component/organManage/page1/page11') // 页面一
/!* 页面二 *!/
const page2 = () => import('@component/organManage/page2/page22') // 页面二-1
const page23 = () => import('@component/organManage/page2/page23') // 页面二-2
/!* 页面三 *!/
const page3 = () => import('@component/other/page3') // 页面三*/

let baseRouter = [
  /*{
    path: '/',
    /!* name: 'login',
     component: () => import('@component/login/login')// 登录*!/
    name: 'enter',
    component: () => import('@component/enter'),
  },*/
  {
    // path: '/enter',
    path: '/',
    name: 'enter',
    component: () => import('@component/enter'),
    redirect: '/organManage/page1',
    children: [
      {
        path: '/organManage/page1',
        name: 'page1',
        component: () => import('@component/organManage/page1/page11') // 页面一
      },
      {
        path: '/organManage/page2',
        name: 'page2',
        component: () => import('@component/organManage/page2/page22') // 页面二-1
      },
      {
        path: '/organManage/page23',
        name: 'page23',
        component: () => import('@component/organManage/page2/page23') // 页面二-2
      },
      {
        path: '/organManage/page41',
        name: 'page2',
        component: () => import('@component/organManage/page4/page41') // 页面四-1
      },
      {
        path: '/organManage/page42',
        name: 'page23',
        component: () => import('@component/organManage/page4/page41') // 页面四-2
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@component/other/page3') // 页面三
      },
      {
        path: '/baseData',
        name: 'baseData',
        component: () => import('@component/other/baseData') // 基础数据
      },
    ]
  },
]

export default new Router({
  routes: baseRouter
})
