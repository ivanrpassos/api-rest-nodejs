import fastify from 'fastify';
import { knex } from './database';

import crypto from 'node:crypto';

const app = fastify();

app.get('/transactions', async () => {
  // const transactions = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transação de teste',
  //     amount: 1200,
  //   })
  //   .returning('*');

  const transactions = await knex('transactions').select(
    '*',
  );

  return transactions;
});

app.get('/sessions', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    tittle: 'Transação de teste',
  });

  return transactions;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTPP Server Runing');
  });
