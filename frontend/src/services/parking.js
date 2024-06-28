import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const startParking = async (form) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/start-parking`, form);
    return response;
  } catch (e) {
    return e;
  }
};

export const stopParking = async (form) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/stop-parking`, form);
    return response;
  } catch (e) {
    return e;
  }
};
