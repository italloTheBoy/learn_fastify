import { FastifyPluginAsync } from "fastify";
import { PeopleSchema } from "../types/People";

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/hello", async function (req, reply) {
    return { message: "hello" };
  });

  fastify.get("/world", async function (req, reply) {
    return { message: "world" };
  });

  fastify.post("/people", async function (req, reply) {
    const body = PeopleSchema.safeParse(req.body);

    if (!body.success) {
      reply.code(422);

      return body.error.format();
    }

    return body.data;
  });

  fastify.post("/decorate", async function (req, reply) {
    const body = PeopleSchema.safeParse(req.body);

    if (!body.success) {
      reply.code(422);

      return body.error.format();
    }

    return {
      hello: `${this.happy_msg.hello} ${body.data.name}`,
      bye: `${this.happy_msg.bye} ${body.data.name}`,
    };
  });
};

export default root;
