import buildFastify from "./buildFastify";

const startServer = async (): Promise<void> => {
  const server = buildFastify({});

  try {
    await server.listen(3000);
    server.log.info("shes suckin diesel now");
  } catch (err) {
    server.log.error(err);
    process.exit(-1);
  }
};

export default startServer;
