import { FastifyInstance } from "fastify";
import v1 from "./v1/v1Routes";

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get("/", async () => ({
    service: "reporting",
    apiVersions: [
      {
        prefix: "/v1",
        routes: ["GET /report"],
      },
    ],
  }));
  fastify.register(v1, { prefix: "v1" });
};

export default routes;
