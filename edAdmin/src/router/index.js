import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 公共组件
const NotFinished = r => require.ensure([], () => r(require('@/components/NotFinished')), 'notFinished');

// 登录login
const Login = r => require.ensure([], () => r(require('@/pages/Login')), 'login');

// 首页admin
const AdminIndex = r => require.ensure([], () => r(require('@/pages/admin/AdminIndex')), 'adminIndex');

// 附录
const Appendix = r => require.ensure([], () => r(require('@/pages/appendix/Appendix')), 'appendix');

// 语法管理
const GrammarAdmin = r => require.ensure([], () => r(require('@/pages/grammarAdmin/GrammarAdmin')), 'grammarAdmin');

// 等级系统
const IntegralSystem = r => require.ensure([], () => r(require('@/pages/integralSystem/IntegralSystem')), 'integralSystem');

// 设置
const Setting = r => require.ensure([], () => r(require('@/pages/setting/Setting')), 'setting');
// 管理员设置 SettingAdmin
const SettingAdmin = r => require.ensure([], () => r(require('@/pages/setting/SettingAdmin')), 'SettingAdmin');

// 时光机
const TimeMachine = r => require.ensure([], () => r(require('@/pages/timeMachine/TimeMachine')), 'timeMachine');

// 单词管理
const WordAdmin = r => require.ensure([], () => r(require('@/pages/wordAdmin/WordAdmin')), 'wordAdmin');
const WordInput = r => require.ensure([], () => r(require('@/pages/wordAdmin/WordInput')), 'wordInput');

const routes = [
    {
        path: '/',
        component: Login
    }, {
        path: '/admin',
        component: AdminIndex,
        children:[{
            path: '/appendix',
			component: Appendix,
			meta: [],
        },{
            path: '/grammarAdmin',
			component: GrammarAdmin,
			meta: [],
        },{
            path: '/integralSystem',
			component: IntegralSystem,
			meta: [],
        },{
            path: '/setting',
			component: Setting,
			meta: [],
        },{
            path: '/settingAdmin',
			component: SettingAdmin,
			meta: [],
        },{
            path: '/timeMachine',
			component: TimeMachine,
			meta: [],
        },{
            path: '/wordAdmin',
			component: WordAdmin,
			meta: [],
        },{
            path: '/wordInput',
			component: WordInput,
			meta: [],
        },{
            path: '/notFinished',
            component: NotFinished,
            meta: [],
        }]
    },
    
]
export default new Router({
	routes
})