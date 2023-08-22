import { FastifyRequest, FastifyReply } from 'fastify';

export async function checkSessionId(
  req: FastifyRequest,
  res: FastifyReply,
) {
  let sessionId = req.cookies.sessionId;

  if (!sessionId) {
    return res.status(401).send({
      error: 'Unauthorized',
    });
  }
}
