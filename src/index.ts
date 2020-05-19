import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return "nonce 🦕\n";
});

server.get<{
  Querystring: IQueryString;
}>("/yeet", async (request, reply) => {
  const id = request.query;

  return id;
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

interface IQueryString {
  id: string;
}
