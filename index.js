import express from 'express';
import 'dotenv/config';
import { getWeatherByParams } from './utils.js';

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('/weather/current', async (req, res) => {
  const { lat, lon } = req.query;
  console.log(lat, lon);
  const weather = await getWeatherByParams({ lat, lon });
  console.log(weather);
  console.log('aboba');

  res.render('city', { weather });
});

app.get('/weather/:city', async (req, res) => {
  const weather = await getWeatherByParams({ city: req.params.city });

  res.render('city', { weather });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});