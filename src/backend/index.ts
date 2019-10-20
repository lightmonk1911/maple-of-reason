import express from 'express';
import * as db from './db/db';
import { ITask } from '../frontend/components/task/task.types';
import { QueryResult } from 'pg';
const app = express();
const port = 3000;

app.use((req, _res, next) => {
  console.log('req', req.url);
  next();
});

app.get('/', (_req, res) => res.send('Hello World!'));
app.get('/api/tasks', async (_req, res) => {
  console.log('get /tasks');
  const dbRes: QueryResult<ITask> = await db.query('SELECT  * from tasks', []);
  const result: ITask[] = dbRes.rows;
  res.json(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
