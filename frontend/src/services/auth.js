import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const login = async (form) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/login`, form);
    return response;
  } catch (e) {
    return e;
  }
};

export const register = async (form) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/register`, form);
    return response;
  } catch (e) {
    return e;
  }
};
