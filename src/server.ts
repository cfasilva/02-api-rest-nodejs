import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const server = fastify()

server.get('/hello', async () => {
    const transactions = await knex('transactions')
      .where('amount', 1000)
      .select('*')

    return transactions
})

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
