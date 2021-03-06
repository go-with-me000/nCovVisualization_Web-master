import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/home/home'
import StatisticList from '@/components/statisticList/statisticList'
import ChinaMap from '@/components/chinaMap/chinaMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'statisticList'
      }
    },
    {
      path: '/home',
      redirect: {name: 'statisticList'},
      component: Home,
      children: [
        {
          path: 'statisticList',
          component: StatisticList,
          name: 'statisticList'
        },
        {
          path: 'chinaMap',
          component: ChinaMap,
          name: 'chinaMap'
        }
      ]
    }
  ]
})
