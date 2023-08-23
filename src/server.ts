import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { env } from './env';
import { transactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(cookie);

/**
 * Aula 18 - Configurando um hook global
 */
// app.addHook('preHandler', async (req, res) => {
//   console.log('Testes');
// });

app.register(transactionsRoutes, {
  prefix: 'transactions',
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTPP Server Runing');
  });
