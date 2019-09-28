import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Enter = () => import('@component/enter')
const login = () => import('@component/login/login') // 登录
/* 页面一 */
const page1 = () => import('@component/organManage/page1/page11') // 页面一
/* 页面二 */
const page2 = () => import('@component/organManage/page2/page22') // 页面二-1
const page23 = () => import('@component/organManage/page2/page23') // 页面二-2
/* 页面三 */
const page3 = () => import('@component/other/page3') // 页面三

let baseRouter = [
  {
    path: '/',
    /* name: 'login',
     component: login*/
    name: 'enter',
    component: Enter,
  },
  {
    path: '/enter',
    name: 'enter',
    component: Enter,
    redirect: '/organManage/page1',
    children: [
      {
        path: '/organManage/page1',
        name: 'page1',
        component: page1
      },
      {
        path: '/organManage/page2',
        name: 'page2',
        component: page2
      },
      {
        path: '/organManage/page23',
        name: 'page23',
        component: page23
      },
      {
        path: '/page3',
        name: 'page3',
        component: page3
      },
    ]
  },
]

export default new Router({
  routes: baseRouter
})
