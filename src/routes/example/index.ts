import { FastifyPluginAsync } from "fastify"

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/hello', async function (request, reply) {
    return {hello: "world"}
  })
}

export default example;
