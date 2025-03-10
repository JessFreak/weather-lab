import express from 'express';
import 'dotenv/config';
import { getWeatherByCity } from './utils.js';

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('/weather/:city', async (req, res) => {
  const weather = await getWeatherByCity(req.params.city);

  res.render('city', { weather });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});