import 'dotenv/config';

import { drizzle } from 'drizzle-orm/libsql/web';

export const db = drizzle({ connection: {
  url: process.env.DATABASE_URL, 
  authToken: process.env.DATABASE_AUTH_TOKEN 
}});