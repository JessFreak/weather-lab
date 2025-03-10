# Weather App

## Description

This is a simple weather web application 
built using Node.js, Express, Handlebars, and Axios to fetch weather data from OpenWeatherMap API. 
It allows users to view the current weather for a specific city or their current location.

### Technologies used
- Node.js
- Express.js
- Handlebars (hbs): Template engine for rendering views.
- Axios: HTTP client for making API requests.
- OpenWeatherMap API: Used to fetch weather data.

## Project setup

### Prerequisites
- Node.js 16.14.0 or higher
- npm 8.1.0 or higher

### Clone the repository
```bash
$ git clone git clone https://github.com/JessFreak/weather-lab.git

$ cd weather-lab
```

### Environment setup

Create a `.env` file in the root directory of the project and add the following environment variables:
- `OPENWEATHER_API_URL`: The base URL for the OpenWeatherMap API (e.g. `https://api.openweathermap.org/data/2.5/weather`).
- `PORT`: The port number on which the server will listen (e.g. `3000`).
- `OPENWEATHER_API_KEY`: The API key for the OpenWeatherMap API (e.g. `your_api_key`).

### Install dependencies
```bash
$ npm install
```

### Run the project

```bash
$ npm start
```
