

import { drizzle } from 'drizzle-orm/libsql/web';


export function useDrizzle() {
  return drizzle({ connection: {
    url: process.env.DATABASE_URL, 
    authToken: process.env.DATABASE_AUTH_TOKEN 
  }});
}
