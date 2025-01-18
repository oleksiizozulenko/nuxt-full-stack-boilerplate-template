import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
     out: './server/database/migrations',
    dialect: "sqlite",
    schema: "./server/database/schemas/*",
});