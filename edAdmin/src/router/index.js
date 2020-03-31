import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import Login from '@/pages/Login'
// import AdminIndex from '@/pages/admin/AdminIndex'
const Login = r => require.ensure([], () => r(require('@/pages/Login')), 'Login');
const AdminIndex = r => require.ensure([], () => r(require('@/pages/admin/AdminIndex')), 'AdminIndex');

const routes = [
    {
        path: '/',
        component: Login
    }, {
        path: '/admin',
        component: AdminIndex,
        children:[{
            path: '',
			component: home,
			meta: [],
        },{
            path: '',
			component: home,
			meta: [],
        },{
            path: '',
			component: home,
			meta: [],
        },{
            path: '',
			component: home,
			meta: [],
        },{
            path: '',
			component: home,
			meta: [],
        },{
            path: '',
			component: home,
			meta: [],
        },{
            path: '',
			component: home,
			meta: [],
        },]
    }
]
export default new Router({
	routes
	// strict: process.env.NODE_ENV !== 'production',
})
// export default new Router({
//     routes: [
//         {
//             path: '/login',
//             name: 'login',
//             component: Login
//         }, {
//             path: '/admin',
//             name: 'adminIndex',
//             component: adminIndex
//         }
//     ]
// })
