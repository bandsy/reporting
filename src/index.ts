import startServer from "./server";

const server = async () => {
  try {
    await startServer();
  } catch (err) {
    console.error(`shit be fucked ${err}`);
    process.exit(-1);
  }
};

server();
