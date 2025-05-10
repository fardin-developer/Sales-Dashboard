import axios from 'axios';

console.log(import.meta.env.API_BASE_URL)
axios.defaults.baseURL = import.meta.env.API_BASE_URL || 'http://127.0.0.1:8000/api/v1/';
axios.defaults.timeout = 10000;
axios.defaults.headers.common['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // If error is 401 and we haven't tried to refresh the token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // You could implement token refresh logic here
        const refreshToken = localStorage.getItem('refresh_token');
        
        if (refreshToken) {
          // Example refresh token logic - uncomment and modify as needed
          // const response = await axios.post('/auth/refresh-token', { 
          //   refresh_token: refreshToken 
          // });
          // 
          // const newAccessToken = response.data.access_token;
          // localStorage.setItem('access_token', newAccessToken);
          // 
          // originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          // return axios(originalRequest);
        }
      } catch (refreshError) {
        // Handle refresh token failure (e.g., redirect to login)
        console.error('Token refresh failed:', refreshError);
        
        // You might want to redirect to login or show notification
        // window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);