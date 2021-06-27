const route = [{
        path: '/home',
        component: () => import('../components/userouter/index.vue'),
    },
    {
        path: '/login',
        component: () => import('../components/userouter/login.vue'),
    },
    {
        path: '/user/:id',
        component: () => import('../components/userouter/user.vue'),
        children: [
            {
                path: 'todolist',
                component: () => import('../components/todoList/index.vue')
            }
        ]
    }
]

export default route