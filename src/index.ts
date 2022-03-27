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
  const mainDivClasses = [
    'box-border', 'border-cyan-900', 'border-2', 'rounded-2xl', 'flex', 'flex-col', 'items-center', 'justify-start',
    'absolute', 'inset-y-30', 'w-96', 'h-96', 'z-0', 'bg-gradient-to-r', 'from-sky-500', 'to-indigo-500'
  ]
  const params: {
    avatar?: string;
    avatarDiv?: string[];
  } = {};

  // check if query is valid and protocol is https (no http)
  if (query.avatar && (query.avatar as string).match(/^https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)) {
    params.avatar = query.avatar as string;
    params.avatarDiv = mainDivClasses.concat([ 'position-fixed', 'top-24', 'pt-14' ]);
  } else mainDivClasses.push('p-2');

  res.render('api', params);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Listenning for requests');
});
