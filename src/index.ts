import express from 'express';
import path from 'path';

const app = express();
app.set('view engine', 'pug');

app.get('/style.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'style.css'));
});

app.get('/api', (req, res) => {
  res.render('api');
});

app.listen(process.env.PORT || 8080);
