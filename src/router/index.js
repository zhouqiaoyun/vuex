import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testStore from '@/components/testStore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/testStore',
      name: 'testStore',
      component: testStore
    }
  ]
})
