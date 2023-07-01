import fastify from 'fastify'

const server = fastify()

server.get('/hello', () => {
  return 'Hellow World'
})

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })
