import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = process.env.OPENWEATHER_API_URL;

export const getWeatherByParams = async ({ city, lat, lon }) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        lat: lat,
        lon: lon,
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

export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: lat,
        lon: lon,
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
