import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async (data) => {
  const { data: result } = await instance.post('/api/users/register', data);
  setToken(result.token);
  return result;
};

export const login = async (data) => {
  const { data: result } = await instance.post('/api/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const { data } = await instance.post('/api/users/logout');
  setToken();
  return data;
};

export const getCurrent = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get('/api/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const resendVerifyEmail = async (email) => {
  const { data } = await instance.post('/api/users/verify', { email });
  return data.message;
};

export default instance;
