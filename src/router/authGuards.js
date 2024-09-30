import store from '../store';

export const requireAuth = (to, from, next) => {
    if (!store.getters['user/isAuthenticated']) {
        next({ name: 'Login' });
    } else {
        next();
    }
};

export const guestOnly = (to, from, next) => {
    if (store.getters['user/isAuthenticated']) {
        next({ name: 'Profile' });
    } else {
        next();
    }
};

export const verifyAccountAccess = (to, from, next) => {
    if (store.getters['user/isAuthenticated']) {
        next({ name: 'Profile' });
    } else if (!store.getters['user/userData'].email) {
        next({ name: 'Login' });
    } else {
        next();
    }
};

export const handleLogout = async (to, from, next) => {
    await store.dispatch('user/logout');
    next({ name: 'Login' });
};

