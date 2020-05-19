import Fastify, { FastifyInstance } from "fastify";
import fastifyCors from "fastify-cors";

import routes from "./routes/routes";

const buildFastify = (settings = {}): FastifyInstance => {
  const fastify = Fastify(settings);

  fastify.get("/", async () => ({
    service: "reporting",
    serviceVersion: "0.1",
    apiPrefix: "/api",
    sexOffendersList: "matt(he be a dangerous dog nonce)",
  }));

  fastify.register(fastifyCors, {
    origin: true,
  });

  fastify.register(routes, { prefix: "/api" });

  return fastify;
};

export default buildFastify;
