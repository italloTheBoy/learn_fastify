import fp from "fastify-plugin";

export interface Happy_MsgPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<Happy_MsgPluginOptions>(async (fastify, opts) => {
  fastify.decorate("happy_msg", { hello: "hello", bye: "bye" });
});

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export interface FastifyInstance {
    happy_msg: {
      hello: "hello";
      bye: "bye";
    };
  }
}
