import { Pool, ClientBase } from 'pg';
const config = {
  user: 'ibabenkov',
  host: 'localhost',
  database: 'maple_of_reason',
  password: '18627735',
  port: 5432
};

const pool = new Pool(config);
const query = (text: string, params: string[]) => pool.query(text, params);
const getClient = async () => {
  const client = await pool.connect();
  let lastQuery: Parameters<ClientBase['query']>;
  type FQuery = ClientBase['query'];

  client.query = function(
    ...args: Parameters<FQuery>
  ): ReturnType<ClientBase['query']> {
    lastQuery = args;
    return client.query(...args);
  } as ClientBase['query'];

  const getLastQuery = () => lastQuery;
  return { client, query, getLastQuery };
};

export { query, getClient };
