import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const fetchCity = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/city`);
    return response;
  } catch (e) {
    return e;
  }
};
export const fetchParkingArea = async (id) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/parkingArea/${id}`);
    return response;
  } catch (e) {
    return e;
  }
};
