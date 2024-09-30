import {
    register,
    login,
    verifyAccount,
    forgotPassword,
    resetPassword,
    getUserProfile
} from '@/api/user.js';
import { SET_USER, SET_TOKEN, LOGOUT, LOADING, SUCCESS, ERROR } from '@/store/types/mutationTypes.js';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null,
};

const getters = {
    isAuthenticated: state => !!state.token,
    userData: state => state.user,
    status: state => state.status,
    error: state => state.error,
};

const actions = {
    async register({ commit }, userData) {
        commit(LOADING);
        try {
            const response = await register(userData);
            commit(SUCCESS);
            commit(SET_USER, response.data.user);
            return response.data;
        } catch (error) {
            const { message, status } = handleError(error);
            commit(ERROR, { message, status });
            throw { message, status };
        }
    },

    async login({ commit }, credentials) {
        commit(LOADING);
        try {
            const response = await login(credentials);
            commit(SUCCESS);
            commit(SET_USER, response.data.user);
            commit(SET_TOKEN, response.data.access_token);
            localStorage.setItem('token', response.data.access_token);
            return response.data;
        } catch (error) {
            const { message, status } = handleError(error);
            commit(ERROR, { message, status });

            // if user needs to verify his account
            //      set user email to allowing user access account verification route
            if(status === 401) {
                commit(SET_USER, error.response.data.detail.user);
            }

            localStorage.removeItem('token');
            throw { message, status };
        }
    },

    async verifyAccount({ commit }, data) {
        commit(LOADING);
        try {
            const response = await verifyAccount(data);
            commit(SUCCESS);
            return response.data;
        } catch (error) {
            const { message, status } = handleError(error);
            commit(ERROR, { message, status });
            throw { message, status };
        }
    },

    async forgotPassword({ commit }, email) {
        commit(LOADING);
        try {
            const response = await forgotPassword(email);
            commit(SUCCESS);
            return response.data;
        } catch (error) {

            const { message, status } = handleError(error);
            commit(ERROR, { message, status });
            throw { message, status };
        }
    },

    async resetPassword({ commit }, data) {
        commit(LOADING);
        try {
            const response = await resetPassword(data);
            commit(SUCCESS);
            return response.data;
        } catch (error) {
            const { message, status } = handleError(error);
            commit(ERROR, { message, status });
            throw { message, status };
        }
    },

    async getUserProfile({ commit }) {
        try {
            const token = localStorage.getItem('token');
            const response = await getUserProfile(token);
            commit(SET_USER, response.data);
            return response;
        } catch (error) {
            const { message, status } = handleError(error);
            commit(ERROR, { message, status });
            throw { message, status };
        }
    },

    logout({ commit }) {
        commit(LOGOUT);
        localStorage.removeItem('token');
    }
};

const mutations = {
    [LOADING](state) {
        state.status = 'loading';
        state.error = null;
    },
    [SUCCESS](state) {
        state.status = 'success';
        state.error = null;
    },
    [ERROR](state, error) {
        state.status = 'error';
        state.error = error;
    },
    [SET_USER](state, user) {
        state.user = user;
    },
    [SET_TOKEN](state, token) {
        state.token = token;
    },
    [LOGOUT](state) {
        state.token = '';
        state.user = {};
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

function handleError(error) {
    let errorMessage;
    let statusCode = 500;

    if (error.response) {
        const { status, data } = error.response;
        statusCode = status;

        if (data.detail && data.detail.message) {
            errorMessage = data.detail.message;
        } else if (data.message) {
            errorMessage = data.message;
        } else {
            errorMessage = 'Something went wrong.';
        }
    } else {
        errorMessage = 'An error occurred. Please try again later.';
    }

    return { message: errorMessage, status: statusCode };
}