import Vue from 'vue'
import Router from 'vue-router'
// pc
import PcHome from '@/main/pc/home'
import PcDetails from '@/main/pc/details'
import PcEnterpriseInfo from '@/main/pc/enterpriseInfo'
import PcLogin from '@/main/pc/login'
import PcRig from '@/main/pc/register'
import PcMessage from '@/main/pc/message'
// mobile
import MobileHome from '@/main/mobile/home'
import MobileDetails from '@/main/mobile/details'
import MobileEnterpriseInfo from '@/main/pc/enterpriseInfo'
Vue.use(Router)

export default new Router({
  routes: [
    // pc端
    // 首页
    {
      path: '/',
      name: 'PcHome',
      component: PcHome
    },
    // 详情
    {
      path: '/PcDetails/:id',
      name: 'PcDetails',
      component: PcDetails
    },
    // 企业信息
    {
      path: '/PcEnterpriseInfo',
      name: 'PcEnterpriseInfo',
      component: PcEnterpriseInfo
    },
    // 登陆
    {
      path: '/PcLogin',
      name: 'PcLogin',
      component: PcLogin
    },
    // 注册
    {
      path: '/PcRig',
      name: 'PcRig',
      component: PcRig
    },
    // 消息
    {
      path: '/PcMessage',
      name: 'PcMessage',
      component: PcMessage
    },

    // Mobile端
    // 首页
    {
      path: '/MobileHome',
      name: 'MobileHome',
      component: MobileHome
    },
    // 详情
    {
      path: '/MobileDetails/:id',
      name: 'MobileDetails',
      component: MobileDetails
    },
    // 详情
    {
      path: '/MobileEnterpriseInfo',
      name: 'MobileEnterpriseInfo',
      component: MobileEnterpriseInfo
    },
  ]
})
