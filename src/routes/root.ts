import { FastifyPluginAsync } from "fastify";
import { PeopleSchema } from "../types/People";
import z, { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/hello", async (request, reply) => {
    return { message: "hello" };
  });

  fastify.get("/world", async function (request, reply) {
    return { message: "world" };
  });

  fastify.post("/people", async (req, reply) => {
    const body = PeopleSchema.safeParse(req.body);

    if (!body.success) {
      reply.code(422);

      return body.error.format();
    }

    return body.data;
  });
};

export default root;
