import { FastifyInstance } from "fastify";

import report from "./routes/report";

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.register(report, { prefix: "report" });
};
