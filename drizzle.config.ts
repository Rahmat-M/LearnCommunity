import { Config, defineConfig } from 'drizzle-kit';

export default defineConfig({
    schemaFilter: ['public'],

    schema: './src/drizzle/schema.ts',
    out: './src/drizzle/migrations',
    dialect: 'postgresql',
    migrations: {
        prefix: 'supabase',
    },
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
} satisfies Config);
