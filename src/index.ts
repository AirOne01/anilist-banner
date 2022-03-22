import express from 'express';
import path from 'path';

const app = express();

console.log('AniBanner is running');

app.set('view engine', 'pug');

app.get('/style.css', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'style.css'));
});

app.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
})

app.get('/api', async ({ query }, res) => {
  // check if query is valid and protocol is https (no http)
  query.avatar && !(query.avatar as string).match(/^https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/) && delete query.avatar;

  res.render('api', query);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Listenning for requests');
});
