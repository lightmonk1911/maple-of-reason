import express from 'express';
import { tasks } from './tasks';
const app = express();
const port = 3000;

app.get('/', (_req, res) => res.send('Hello World!'));
app.get('/tasks', (_req, res) => res.json(tasks));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
