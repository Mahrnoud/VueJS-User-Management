import { createRouter, createWebHistory } from 'vue-router';
import {guestOnly, verifyAccountAccess, handleLogout} from './authGuards';
import Register from '../views/Register.vue';
import VerifyAccount from '../views/VerifyAccount.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import store from "@/store";

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: guestOnly,  
  },
  {
    path: '/verify-account',
    name: 'VerifyAccount',
    component: VerifyAccount,
    beforeEnter: verifyAccountAccess,  
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: guestOnly,  
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    beforeEnter: guestOnly,  
  },
  {
    path: '/reset-password/:code',
    name: 'ResetPassword',
    component: ResetPassword,
    beforeEnter: guestOnly,  
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: handleLogout,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['user/isAuthenticated']) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});



export default router;
