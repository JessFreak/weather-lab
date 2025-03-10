import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = process.env.OPENWEATHER_API_URL;

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'ua',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error.response?.data || error.message);
  }
}