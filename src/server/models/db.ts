const { Pool } = require('pg');

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
  max: 5
});

export const db = {
  query: (text: string, params: Array<string>, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
