import 'dotenv/config'
import { knex as setupKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be set')
}

export const config: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: process.env.DATABASE_URL
    },
    migrations: {
        extension: 'ts',
        directory: './db/migrations'
    }
}

export const knex = setupKnex(config)