import Vue from 'vue';
import Router from 'vue-router';
import demo from '@/components/demo';
import home from '@/components/home';
import courseCenter from '@/components/courseCenter';
import courseDetail from '@/components/courseDetail';
import datumIndex from '@/components/datumIndex';
import datumDetail from '@/components/datumDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: '首页',
      component: home
    },
    {
      path: '/courseCenter',
      name: '课程中心',
      component: courseCenter
    },{
      path: '/courseDetail',
      name: '课程详情',
      component: courseDetail
    },
    {
      path: '/datumIndex',
      name: '资料列表',
      component: datumIndex
    },
    {
      path: '/datumDetail',
      name: '资料详情',
      component: datumDetail
    }
  ]
})
