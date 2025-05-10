import axios from 'axios';

// Save tokens to localStorage
export const setAuthTokens = (accessToken, refreshToken = null) => {
  localStorage.setItem('access_token', accessToken);
  if (refreshToken) {
    localStorage.setItem('refresh_token', refreshToken);
  }
};

// Clear tokens from localStorage
export const clearAuthTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};

// Example login function
export const login = async (email, password) => {
  try {
    const response = await axios.post('/auth/login', { email, password });
    
    const { access_token, refresh_token } = response.data;
    setAuthTokens(access_token, refresh_token);
    
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// Example logout function
export const logout = async () => {
  try {
    // Optionally call a logout endpoint
    await axios.post('/auth/logout');
  } catch (error) {
    console.error('Logout API call failed:', error);
    // Continue with logout even if API call fails
  } finally {
    clearAuthTokens();
    // Optionally redirect to login page
    // window.location.href = '/login';
  }
};