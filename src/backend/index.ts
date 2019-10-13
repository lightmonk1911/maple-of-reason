import express from 'express';
import { tasks } from './tasks';
const app = express();
const port = 3000;

app.use((req, _res, next) => {
  console.log('req', req.url);
  next();
});

app.get('/', (_req, res) => res.send('Hello World!'));
app.get('/api/tasks', (_req, res) => {
  console.log('get /tasks');
  return res.json(tasks);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
