import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreatePostView from '../views/CreatePostView.vue';
import RegisterView from '../views/RegisterForm.vue';
import LoginView from '../views/LoginForm.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePostView,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!localStorage.getItem('token');

  if (requiresAuth && !isAuthenticated) {

    next('/login');
  } else {
    next();
  }
});

export default router;
