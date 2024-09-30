import axios from 'axios';

const DOMAIN = 'http://127.0.0.1:8000';
const Path = '/users';
const API_URL = DOMAIN + Path;

// Utility function for handling errors
const handleError = (error) => {
    // throw error.response ? error.response.data : error;
    throw error;
};

export const register = async (userData) => {
    try {
        return await axios.post(`${API_URL}/register`, userData);
    } catch (error) {
        handleError(error);
    }
};

export const login = async (credentials) => {
    try {
        return await axios.post(`${API_URL}/login`, credentials);
    } catch (error) {
        handleError(error);
    }
};

export const verifyAccount = async (data) => {
    try {
        return await axios.post(`${API_URL}/confirm-email`, data);
    } catch (error) {
        handleError(error);
    }
};

export const forgotPassword = async (email) => {
    try {
        return await axios.post(`${API_URL}/forgot-password`, { email });
    } catch (error) {
        handleError(error);
    }
};

export const resetPassword = async (data) => {
    try {
        return await axios.post(
            `${API_URL}/reset-password/${data.code}`,
            { new_password: data.password }
        );
    } catch (error) {
        handleError(error);
    }
};

export const getUserProfile = async (token) => {
    try {
        return await axios.get(
            `${API_URL}/profile`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        handleError(error);
    }
};
