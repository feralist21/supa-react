const BASE_URL = 'https://dummyjson.com/';

const apiEndpoints = {
    auth: {
        login: () => `${BASE_URL}/auth/login`,
        getCurrentUser: () => `${BASE_URL}/auth/me`,
        refreshAuth: () => `${BASE_URL}/auth/refresh`,
    },
};

export { BASE_URL, apiEndpoints };
