import fastify from 'fastify';

const app = fastify();

app.listen({
  port: 3333,
}).then(() => {
  console.log('server started: http://localhost:3333');
});
