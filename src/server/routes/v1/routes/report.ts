import { FastifyInstance } from "fastify";

const report = () => {
  return "u a nonce";
};

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get("/", async () => {
    const oof = report();
    return {
      oof,
    };
  });
};
