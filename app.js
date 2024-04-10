import * as crypto from 'crypto';
import Fastify from 'fastify';
const fastify = Fastify({ logger: true });

const trustToken = 'five9token';

function createHashFromString(str) {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.get('/call_event', async (request, reply) => {
  return `"${createHashFromString(trustToken)}"`;
});

fastify.post('/call_event', async (request, reply) => {
  return `"${createHashFromString(trustToken)}"`;
});

fastify.get('/webhook', async (request, reply) => {
  return `"${createHashFromString(trustToken)}"`;
});

fastify.post('/webhook', async (request, reply) => {
  return `"${createHashFromString(trustToken)}"`;
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
start();