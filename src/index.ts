import express from 'express';
import path from 'path';

const app = express();

console.log('AniBanner is running');

app.set('view engine', 'pug');
app.get('/style.css', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'style.css'));
});

app.get('/api', (_, res) => {
  res.render('api');
});

app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Listenning for requests');
});
