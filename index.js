import express from 'express';
import 'dotenv/config';

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('/weather/:city', (req, res) => {
  const city = req.params.city;
  res.render('city', { city });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});